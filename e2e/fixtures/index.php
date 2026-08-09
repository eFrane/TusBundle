<?php

// E2E Test Entry Point
// This file bootstraps the ServerBridge, testing a full Symfony setup is
// not necessary e2e since the bundle integration is tested via PHPUnit

// Suppress deprecation warnings to avoid breaking the HTML output
error_reporting(E_ERROR | E_PARSE);

require __DIR__ . '/../../vendor/autoload.php';

use EFrane\TusBundle\Bridge\ServerBridge;
use EFrane\TusBundle\Middleware\MiddlewareCollection;
use Symfony\Component\EventDispatcher\EventDispatcher;
use TusPhp\Tus\Server;

$eventDispatcher = new EventDispatcher();
$middlewareCollection = new MiddlewareCollection([]);

// Create the TUS server with the bundle's default configuration
$server = new Server();
$uploadDir = sys_get_temp_dir() . '/tus-uploads';
$server->setUploadDir($uploadDir);

// Ensure upload directory exists
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Create the ServerBridge
$serverBridge = new ServerBridge($eventDispatcher, $middlewareCollection, $server);

// Get the configured server from the bridge
$configuredServer = $serverBridge->getServer();

// Handle the request - determine the path from server variables
/** @var string|null */
$requestUri = $_SERVER['REQUEST_URI'];
$path = $requestUri ?? '/';

// Remove query string if present
if (($pos = strpos($path, '?')) !== false) {
    $path = substr($path, 0, $pos);
}

// Route to the test HTML page
if ($path === '/' || $path === '/index.php') {
    header('Content-Type: text/html; charset=UTF-8');
    readfile(__DIR__ . '/simple-test.html');
    exit;
}

// Route TUS requests to the bundle's TUS server
// Match /_tus/upload or /_tus/upload/{token}
if (strpos($path, '/_tus/upload') === 0) {
    // Let the configured server handle the request
    // This uses the actual bundle's ServerBridge which applies middlewares, event dispatcher, etc.
    $response = $configuredServer->serve();
    $response->send();
    exit;
}

// 404 for unknown routes
header('HTTP/1.1 404 Not Found');
echo 'Not Found';
exit(1);
