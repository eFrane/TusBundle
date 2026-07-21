<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Bridge;

use EFrane\TusBundle\Middleware\MiddlewareCollection;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use TusPhp\Tus\Server;

final class ServerBridge implements ServerBridgeInterface
{
    public function __construct(
        private EventDispatcherInterface $eventDispatcher,
        private MiddlewareCollection $middlewareCollection,
        private Server $server,
    ) {
        $this->configure();
    }

    public function configure(): void
    {
        $this->server->setDispatcher($this->eventDispatcher);

        foreach ($this->middlewareCollection->all() as $middleware) {
            $this->server->middleware()->add($middleware);
        }
    }

    public function getServer(): Server
    {
        return $this->server;
    }
}
