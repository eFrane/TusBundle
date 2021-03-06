<?php

declare(strict_types=1);
/**
 * @copyright 2020
 * @author Stefan "eFrane" Graupner <efrane@meanderingsoul.com>
 */

namespace EFrane\TusBundle\Tests\Bundle;

use EFrane\TusBundle\Bundle\TusBundle;
use Nyholm\BundleTest\BaseBundleTestCase;

class TusBundleTest extends BaseBundleTestCase
{
    protected function getBundleClass(): string
    {
        return TusBundle::class;
    }

    public function testBundleRegistration(): void
    {
        $kernel = $this->getBootedKernel();

        self::assertInstanceOf(TusBundle::class, $kernel->getBundle('TusBundle'));
    }

    private function getBootedKernel(): \Nyholm\BundleTest\AppKernel
    {
        $kernel = $this->createKernel();
        $kernel->boot();

        return $kernel;
    }
}
