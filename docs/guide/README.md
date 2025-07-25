# TusBundle Guide

## Introduction

TusBundle is a Symfony Bundle wrapping [tus-php](https://github.com/ankitpokhrel/tus-php). The main motivation is to
reduce the friction and manual typing when using `tus-php` with Symfony.

[tus](https://tus.io) is a protocol for chunkable and resumable uploads implemented by the
[Uppy](https://uppy.io) uploader.

## Versions Support

The Bundle currently supports Symfony **6.x**, changes to this will be published here 
in and in the release notes.

## Installation and Quickstart

```shell
composer require efrane/tus-bundle
```

### If you do not have Symfony Flex:

Enable the bundle in your `bundles.php`:

```php
return [
    // ...
    EFrane\TusBundle\Bundle\TusBundle::class => ['all' => true],
    // ...
];
```

This bundles contains route definitions, to load them, simply add

```yaml
tus_bundle:
  type: tus_bundle
  resource: .
```

to your `routes.yaml`.

You can run

```shell
php bin/console config:dump TusBundle
```

to dump the default configuration. Copy and paste or redirect the output into a configuration file
at `config/packages/tus.yaml`.

## Default Configuration

| Parameter  | Default Value        | Description |
|------------|----------------------|-------------|
| upload_dir | `%kernel.project_dir%/public/uploads` | Storage directory for finished uploads |
| api_path   | `/_tus/upload` | Routing path to direct tus clients to |
| cache_type | not selected | Caching provider to use |

## Caching

You **MUST** configure a caching provider. It is recommended, to 
use the `native` cache which will use whatever cache
provider you configured in your Symfony application.

**FYI**: Tus uses the cache to store information about the uploads. If you
run into any problems with your upload mechanics, make sure to clear the
configured tus cache when debugging them.

### Available Caching Providers

**`apcu`**

You can use APCu as cache:

```yaml
tus:
  cache_type:
    apcu:
      enabled: true
```

**`file`**

The `file` cache writes caching information to the server-local filesystem. To configure it, you need to set:

```yaml
tus:
  cache_type:
    file:
      enabled: true
```

Additional available options for the `file` cache type:

| Parameter | Default Value                             | Description |
|-----------|-------------------------------------------|-------------|
| `dir` | `%kernel.cache_dir%/%kernel.environment%` | Directory the file cache writes to |
| `name` | `tus_php.server.cache`  | Key for the cached files |

**`native`**

::: tip If you're unsure about the implications, use this provider.
:::

To configure it, you need to set:

```yaml
tus:
  cache_type:
    native:
      enabled: true
```

**`redis`**

To configure Redis as caching provider, you need to at least enable it:

```yaml
tus:
  cache_type:
    redis:
      enabled: true
```

Additionally, you can configure the redis connection with these keys on the redis `cache_type`:

| Parameter | Default Value | Description |
|-----------|---------------|-------------|
| `db` | `0` | Redis DB |
| `host` | `127.0.0.1`   | Redis Host  |
| `port` | `6371` | Redis Port  |


## Events

The Bundle wires the default event manager of your Symfony application into `tus-php`, which means, the
[tus-php events](https://github.com/ankitpokhrel/tus-php#events) can just be listened or subscribed to.

An example event subscriber might look like this:

```php
namespace App\Event\Listener;

use App\Repository\FileRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use TusPhp\Events\UploadComplete;

class TusUploadEventSubscriber implements EventSubscriberInterface
{
    /**
     * @var FileRepository
     */
    protected $files;

    public function __construct(FileRepository $files)
    {
        $this->files = $files;
    }

    /**
     * @return array<string,string>
     */
    public static function getSubscribedEvents(): array
    {
        return [
            UploadComplete::NAME => 'onUploadComplete',
        ];
    }

    public function onUploadComplete(UploadComplete $completedEvent): void
    {
        $this->files->storeTusUploadedFile($completedEvent->getFile());
    }
}
```

## Middleware

While `tus-php` supports adding, skipping and removing middlewares (read: request pre-/post-processors), middleware
support in this bundle is by default limited to adding middlewares. To do so, simply create a class implementing
the `TusPhp\Middleware\TusMiddleware` interface, e.g:

```php
namespace App\Upload\Middleware;


use Psr\Log\LoggerInterface;
use TusPhp\Middleware\TusMiddleware;
use TusPhp\Request;
use TusPhp\Response;

class IsRunningMiddleware implements TusMiddleware
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function handle(Request $request, Response $response)
    {
        $this->logger->info('Middleware is running');
    }
}
```

## Taking full control of the server configuration

Since the bundle registers all of it's services into Symfonys' dependency injection container, you can easily take over
full control of the server configuration. To do so, you can assign a different class
to `EFrane\TusBundle\Bridge\ServerBridgeInterface`:

```php
namespace App\Upload;


use EFrane\TusBundle\Bridge\ServerBridge;
use EFrane\TusBundle\Middleware\MiddlewareCollection;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use TusPhp\Tus\Server;

class CustomServerBridge extends ServerBridge
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(
        EventDispatcherInterface $eventDispatcher,
        LoggerInterface $logger,
        MiddlewareCollection $middlewareCollection,
        Server $server
    ) {
        parent::__construct($eventDispatcher, $middlewareCollection, $server);

        $this->logger = $logger;
    }

    public function getServer(): Server
    {
        $this->logger->info('Using overridden ServerBridge');

        return parent::getServer();
    }
}
```

````yaml
  # in your services.yaml:
  EFrane\TusBundle\Bridge\ServerBridgeInterface: '@App\Upload\CustomServerBridge'
````

## Tips

* Don't overwrite the `ServerBridge` to set the maximum upload size to `post_max_size` or any of the likes. Tus fails
  uploads if the size of a to-be-uploaded file is less than this setting. Instead, you want to configure your Tus
  Client(s) to use chunked uploading. You may pass a slightly lower value than
  `post_max_size` to the clients as chunk size.

* If uploads fail mysteriously, make sure that the destination directory (i.e. `upload_dir`) exists. Neither this bundle
  nor the `tus-php` library do the actual work to take care of creating this directory.
