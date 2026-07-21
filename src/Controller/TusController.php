<?php

declare(strict_types=1);

namespace EFrane\TusBundle\Controller;

use EFrane\TusBundle\Bridge\ServerBridgeInterface;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;

final class TusController
{
    public function __invoke(ServerBridgeInterface $serverBridge): Response|BinaryFileResponse
    {
        return $serverBridge->getServer()->serve();
    }
}
