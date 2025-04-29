<?php

namespace EFrane\TusBundle\Tests\Bridge;

use EFrane\TusBundle\Bridge\NativeCacheStore;
use EFrane\TusBundle\Exception\NativeCacheStoreException;
use PHPUnit\Framework\MockObject\Builder\InvocationMocker;
use PHPUnit\Framework\TestCase;
use Symfony\Contracts\Cache\CacheInterface;

class NativeCacheStoreTest extends TestCase
{
    /**
     * @var (object&\PHPUnit\Framework\MockObject\MockObject)|InvocationMocker|CacheInterface
     */
    private $cacheMock;

    /**
     * @var NativeCacheStore
     */
    private $nativeCacheStore;

    public function testSetAndGetCacheItem(): void
    {
        $key = 'test_key';
        $value = 'test_value';

        $this->nativeCacheStore->set($key, $value);
        $this->cacheMock->expects($this->once())
            ->method('get')
            ->with($this->equalTo($key))
            ->willReturn($value);

        $this->assertEquals($value, $this->nativeCacheStore->get($key));
    }

    public function testDeleteCacheItem(): void
    {
        $key = 'test_key';

        $this->cacheMock->expects($this->once())
            ->method('delete')
            ->with($this->equalTo($key))
            ->willReturn(true);

        $this->assertTrue($this->nativeCacheStore->delete($key));
    }

    public function testGetMissingKeyThrowsException(): void
    {
        $this->expectException(NativeCacheStoreException::class);
        $this->nativeCacheStore->get('missing_key');
    }

    public function testSetAndGetCacheItemWithPrefix(): void
    {
        $key = 'test_key';
        $value = 'test_value';
        $prefix = 'prefix_';

        $this->nativeCacheStore->setPrefix($prefix);
        $this->nativeCacheStore->set($key, $value);
        $this->cacheMock->expects($this->once())
            ->method('get')
            ->with($this->equalTo($prefix.$key))
            ->willReturn($value);

        $this->assertEquals($value, $this->nativeCacheStore->get($key));
    }

    protected function setUp(): void
    {
        $this->cacheMock = $this->createMock(CacheInterface::class);
        $this->nativeCacheStore = new NativeCacheStore($this->cacheMock);
    }
}
