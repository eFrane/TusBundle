<?php

declare(strict_types=1);

namespace EFrane\TusBundle\DependencyInjection;

use EFrane\TusBundle\Bridge\NativeCacheStore;
use EFrane\TusBundle\Bridge\ServerBridge;
use EFrane\TusBundle\Bridge\ServerBridgeInterface;
use EFrane\TusBundle\Controller\TusController;
use EFrane\TusBundle\Middleware\MiddlewareCollection;
use EFrane\TusBundle\Routing\RouteLoader;
use Symfony\Component\DependencyInjection\Alias;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\Extension;
use TusPhp\Cache\ApcuStore;
use TusPhp\Cache\FileStore;
use TusPhp\Cache\RedisStore;
use TusPhp\Middleware\TusMiddleware;
use TusPhp\Tus\Server;

final class TusExtension extends Extension
{
    /**
     * @param array<string,mixed> $configs
     */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $parsedConfiguration = $this->processConfiguration(
            $configuration,
            $configs,
        );

        $container->addDefinitions(
            $this->getTusServiceDefinitions($container, $parsedConfiguration),
        );
    }

    /**
     * @param array<string,mixed> $configuration The parsed configuration for the bundle
     *
     * @return array<string, Definition>
     */
    private function getTusServiceDefinitions(
        ContainerBuilder $containerBuilder,
        array $configuration,
    ): array {
        $definitions = [];

        $this->registerController($definitions);
        $this->registerMiddleware($definitions);

        /** @var string $apiPath */
        $apiPath = $configuration['api_path'];
        /** @var string $environment */
        $environment = $containerBuilder->getParameter('kernel.environment');

        $this->registerRouteLoader($apiPath, $environment, $definitions);
        $this->registerServerBridge($definitions);
        $this->registerTus($configuration, $definitions);

        $containerBuilder
            ->registerForAutoconfiguration(TusMiddleware::class)
            ->addTag('tus.middleware');
        $containerBuilder->setAlias(
            ServerBridgeInterface::class,
            new Alias(ServerBridge::class),
        );

        return $definitions;
    }

    /**
     * @param array<string,Definition> $definitions
     */
    private function registerRouteLoader(
        string $apiPath,
        string $environment,
        array &$definitions,
    ): void {
        $routeLoader = new Definition(RouteLoader::class);
        $routeLoader->setArgument('$apiPath', $apiPath);
        $routeLoader->setArgument('$env', $environment);

        $routeLoader->addTag('routing.loader');

        $definitions[RouteLoader::class] = $routeLoader;
    }

    /**
     * @param array<string,mixed>      $configuration
     * @param array<string,Definition> $definitions
     */
    private function registerTus(
        array $configuration,
        array &$definitions,
    ): void {
        /** @var array<array<string>> $cacheType */
        $cacheType = $configuration['cache_type'];
        /** @var int $cacheTtl */
        $cacheTtl = $configuration['cache_ttl'];

        $fileStore = $this->configureCache($cacheType, $cacheTtl);

        $fileStoreClass = $fileStore->getClass();
        if (null !== $fileStoreClass) {
            $definitions[$fileStoreClass] = $fileStore;
        }

        $server = new Definition(Server::class, [
            '$cacheAdapter' => $fileStore,
        ]);

        $server->addMethodCall('setUploadDir', [$configuration['upload_dir']]);
        $server->addMethodCall('setApiPath', [$configuration['api_path']]);
        $server->setLazy(true);

        $definitions[Server::class] = $server;
    }

    /**
     * @param array<string,Definition> $definitions
     */
    private function registerController(array &$definitions): void
    {
        $controller = new Definition(TusController::class);
        $controller->addTag('controller.service_arguments');
        $controller->setLazy(true);

        $definitions[TusController::class] = $controller;
    }

    /**
     * @param array<string,Definition> $definitions
     */
    private function registerMiddleware(array &$definitions): void
    {
        $middlewareCollection = new Definition(MiddlewareCollection::class);
        $middlewareCollection->setLazy(true);

        $definitions[MiddlewareCollection::class] = $middlewareCollection;
    }

    /**
     * @param array<string,Definition> $definitions
     */
    private function registerServerBridge(array &$definitions): void
    {
        $serverBridge = new Definition(ServerBridge::class);
        $serverBridge->setLazy(true);
        $serverBridge->setAutowired(true);

        $definitions[ServerBridge::class] = $serverBridge;
    }

    /**
     * @param array<array<string>> $cacheConfig
     */
    private function configureCache(array $cacheConfig, int $ttl): Definition
    {
        $cacheStore = $this->createCacheStore($cacheConfig);

        $cacheStore->addMethodCall('setTtl', [$ttl]);
        $cacheStore->setAutowired(true);
        $cacheStore->setLazy(true);

        return $cacheStore;
    }

    /**
     * @param array<array<string>> $cacheConfig
     */
    private function createCacheStore(array $cacheConfig): Definition
    {
        if ($cacheConfig['apcu']['enabled']) {
            return new Definition(ApcuStore::class);
        }

        if ($cacheConfig['file']['enabled']) {
            return new Definition(FileStore::class, [
                '$cacheDir'  => $cacheConfig['file']['dir'],
                '$cacheFile' => $cacheConfig['file']['name'],
            ]);
        }

        if ($cacheConfig['native']['enabled']) {
            return new Definition(NativeCacheStore::class);
        }

        if ($cacheConfig['redis']['enabled']) {
            unset($cacheConfig['redis']['enabled']);

            return new Definition(RedisStore::class, [
                '$options' => $cacheConfig['redis'],
            ]);
        }

        throw new \LogicException('No cache defined.');
    }
}
