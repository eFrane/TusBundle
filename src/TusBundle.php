<?php

declare(strict_types=1);

namespace EFrane\TusBundle;

use EFrane\TusBundle\DependencyInjection\Compiler\TusMiddlewareCompilerPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class TusBundle extends Bundle
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new TusMiddlewareCompilerPass());
    }
}
