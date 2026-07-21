<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Bridge;

use TusPhp\Tus\Server;

interface ServerBridgeInterface
{
    public function configure(): void;

    public function getServer(): Server;
}
