<?php

declare(strict_types=1);
/**
 * @copyright 2020
 * @author Stefan "eFrane" Graupner <efrane@meanderingsoul.com>
 */

namespace EFrane\TusBundle\Bridge;


use EFrane\TusBundle\Middleware\MiddlewareCollection;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use TusPhp\Tus\Server;

class ServerBridge
{
    /**
     * @var Server
     */
    protected $server;

    public function __construct(EventDispatcherInterface $eventDispatcher, MiddlewareCollection $middlewareCollection, Server $server)
    {
        $server->setDispatcher($eventDispatcher);
        $server->middleware()->add($middlewareCollection->all());

        $this->server = $server;
    }

    public function getServer(): Server
    {
        return $this->server;
    }
}
