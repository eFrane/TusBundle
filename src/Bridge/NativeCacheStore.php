<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Bridge;

use EFrane\TusBundle\Exception\NativeCacheStoreException;
use Psr\Cache\CacheItemInterface;
use Psr\Cache\InvalidArgumentException;
use Symfony\Contracts\Cache\CacheInterface;
use TusPhp\Cache\Cacheable;

/**
 * TusPhp Cache Adapter to use the Symfony Cache directly.
 */
final class NativeCacheStore implements Cacheable
{
    private string $prefix = '';
    private int $ttl = 300;

    /** @var array<string, callable> */
    private array $keyCallables = [];

    public function __construct(
        private CacheInterface $cache,
    ) {
    }

    /**
     * @throws InvalidArgumentException
     */
    public function get(string $key, bool $withExpired = false): mixed
    {
        if (!array_key_exists($key, $this->keyCallables)) {
            throw NativeCacheStoreException::missingKey($key);
        }

        return $this->cache->get($this->prefix.$key, $this->keyCallables[$key]);
    }

    public function set(string $key, mixed $value): void
    {
        $this->keyCallables[$key] = function (CacheItemInterface $item) use ($value) {
            $item->expiresAfter($this->ttl);

            return $value;
        };
    }

    /**
     * @throws InvalidArgumentException
     */
    public function delete(string $key): bool
    {
        return $this->cache->delete($key);
    }

    /**
     * @param array<string> $keys
     *
     * @throws InvalidArgumentException
     */
    public function deleteAll(array $keys): bool
    {
        return array_reduce(
            $this->keys(),
            fn (bool $cond, string $key) => $cond && $this->delete($key),
            true
        );
    }

    public function getTtl(): int
    {
        return $this->ttl;
    }

    public function setTtl(int $ttl): self
    {
        $this->ttl = $ttl;

        return $this;
    }

    /**
     * @return array<string>
     */
    public function keys(): array
    {
        return array_keys($this->keyCallables);
    }

    public function setPrefix(string $prefix): Cacheable
    {
        $this->prefix = $prefix;

        return $this;
    }

    public function getPrefix(): string
    {
        return $this->prefix;
    }
}
