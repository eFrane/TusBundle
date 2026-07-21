<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Exception;

final class NativeCacheStoreException extends \RuntimeException
{
    public static function missingKey(string $key): self
    {
        return new self("Key '{$key}' has not been cached");
    }
}
