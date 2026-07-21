<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Routing;

use Symfony\Component\Config\Loader\Loader;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

/**
 * Registers the route definitions required by the tus-server implementation.
 *
 * The routes are limited as much as tus allows in terms of http verbs.
 */
final class RouteLoader extends Loader
{
    public function __construct(
        private string $apiPath,
        ?string $env,
    ) {
        parent::__construct($env);
    }

    public function supports(mixed $resource, ?string $type = null): bool
    {
        return 'tus_bundle' === $type;
    }

    public function load(mixed $resource, ?string $type = null): RouteCollection
    {
        $routes = new RouteCollection();

        $routes->add('tus_upload', new Route(
            $this->apiPath,
            [
                '_controller' => 'EFrane\TusBundle\Controller\TusController',
            ],
            [], [], '', [],
            [
                'POST',
            ]
        ));

        $routes->add('tus_token', new Route(
            "{$this->apiPath}/{token?}",
            [
                '_controller' => 'EFrane\TusBundle\Controller\TusController',
            ],
            [
                'token' => '.+',
            ],
            [], '', [],
            [
                'GET',
                'POST',
                'HEAD',
                'PATCH',
            ]
        ));

        return $routes;
    }
}
