<?php

declare(strict_types=1);
/**
 * @copyright 2020
 * @author Stefan "eFrane" Graupner <efrane@meanderingsoul.com>
 */

namespace EFrane\TusBundle\Tests\Bundle;

use EFrane\TusBundle\Bundle\TusBundle;

class TusBundleTest extends BaseBundleTest
{
    public function testBundleRegistration(): void
    {
        $kernel = $this->bootWithAdditionalDefinitions();

        self::assertInstanceOf(TusBundle::class, $kernel->getBundle('TusBundle'));
    }
}
