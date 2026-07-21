<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Tests;

use EFrane\TusBundle\TusBundle;

class TusBundleTestCase extends BaseBundleTestCase
{
    public function testBundleRegistration(): void
    {
        $kernel = $this->bootWithAdditionalDefinitions();

        self::assertInstanceOf(TusBundle::class, $kernel->getBundle('TusBundle'));

        restore_exception_handler();
    }
}
