<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Tests\DependencyInjection;

use EFrane\TusBundle\DependencyInjection\TusExtension;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionTestCase;

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
}
