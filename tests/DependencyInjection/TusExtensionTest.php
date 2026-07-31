<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Tests\DependencyInjection;

use EFrane\TusBundle\Bridge\NativeCacheStore;
use EFrane\TusBundle\DependencyInjection\TusExtension;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionTestCase;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;
use TusPhp\Cache\ApcuStore;
use TusPhp\Cache\FileStore;
use TusPhp\Cache\RedisStore;

class TusExtensionTest extends AbstractExtensionTestCase
{
    protected function getContainerExtensions(): array
    {
        return [
            new TusExtension(),
        ];
    }

    public function testExtensionCanLoad(): void
    {
        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'apcu' => [
                    'enabled' => true,
                ],
            ],
        ]);

        self::assertTrue($this->container->hasExtension('tus'));
    }

    public function testExtensionLoadsWithApcuCache(): void
    {
        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'apcu' => [
                    'enabled' => true,
                ],
            ],
        ]);

        self::assertTrue($this->container->has(ApcuStore::class));
    }

    public function testExtensionLoadsWithFileCache(): void
    {
        $this->container->setParameter('kernel.environment', 'test');
        $this->container->setParameter('kernel.cache_dir', '/tmp');

        $this->load([
            'cache_type' => [
                'file' => [
                    'enabled' => true,
                    'dir' => '%kernel.cache_dir%/%kernel.environment%',
                    'name' => 'tus_php.server.cache',
                ],
            ],
        ]);

        self::assertTrue($this->container->has(FileStore::class));
    }

    public function testExtensionLoadsWithNativeCache(): void
    {
        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'native' => [
                    'enabled' => true,
                ],
            ],
        ]);

        self::assertTrue($this->container->has(NativeCacheStore::class));
    }

    public function testExtensionLoadsWithRedisCache(): void
    {
        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'redis' => [
                    'enabled' => true,
                    'host' => '127.0.0.1',
                    'port' => 6379,
                    'db' => 0,
                ],
            ],
        ]);

        self::assertTrue($this->container->has(RedisStore::class));
    }

    public function testExtensionLoadsWithFileCacheAndCustomSettings(): void
    {
        $this->container->setParameter('kernel.environment', 'test');
        $this->container->setParameter('kernel.cache_dir', '/tmp');

        $this->load([
            'cache_type' => [
                'file' => [
                    'enabled' => true,
                    'dir' => '/custom/cache/dir',
                    'name' => 'custom_cache_key',
                ],
            ],
            'cache_ttl' => 600,
        ]);

        self::assertTrue($this->container->has(FileStore::class));
    }

    public function testExtensionLoadsWithRedisCacheAndCustomSettings(): void
    {
        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'redis' => [
                    'enabled' => true,
                    'host' => 'redis.example.com',
                    'port' => 6380,
                    'db' => 1,
                ],
            ],
            'cache_ttl' => 900,
        ]);

        self::assertTrue($this->container->has(RedisStore::class));
    }

    public function testExtensionThrowsExceptionWhenMultipleCachesEnabled(): void
    {
        $this->expectException(InvalidConfigurationException::class);
        $this->expectExceptionMessage('You can only specify one of the available cache configurations.');

        $this->container->setParameter('kernel.environment', 'test');

        $this->load([
            'cache_type' => [
                'apcu' => [
                    'enabled' => true,
                ],
                'file' => [
                    'enabled' => true,
                ],
            ],
        ]);
    }

    public function testExtensionLoadsWithAllConfigurationOptions(): void
    {
        $this->container->setParameter('kernel.environment', 'test');
        $this->container->setParameter('kernel.project_dir', '/var/www');

        $this->load([
            'cache_type' => [
                'native' => [
                    'enabled' => true,
                ],
            ],
            'cache_ttl' => 1200,
            'upload_dir' => '%kernel.project_dir%/public/uploads',
            'api_path' => '/custom/tus/path',
            'max_upload_size' => 104857600,
        ]);

        self::assertTrue($this->container->has(NativeCacheStore::class));
    }
}
