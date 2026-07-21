<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Middleware;

use TusPhp\Middleware\Middleware;

final class MiddlewareCollection
{
    /** @var array<int, Middleware> */
    private array $middlewares;

    /**
     * @param array<Middleware> $middlewares
     */
    public function __construct(array $middlewares)
    {
        $this->middlewares = $middlewares;
    }

    /**
     * @return array<int, Middleware>
     */
    public function all(): array
    {
        return $this->middlewares;
    }
}
