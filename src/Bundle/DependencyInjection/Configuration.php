<?php

declare(strict_types=1);
/**
 * @copyright 2020
 * @author Stefan "eFrane" Graupner <efrane@meanderingsoul.com>
 */

namespace EFrane\TusBundle\Bundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('tus');

        /** @var ArrayNodeDefinition $rootNode */
        $rootNode = $treeBuilder->getRootNode();
        $children = $rootNode->children();

        $children->scalarNode('cache_dir')
            ->info('Directory for cached files')
            ->defaultValue('%kernel.cache_dir%/%kernel.environment%');

        $children->scalarNode('upload_dir')
            ->info('Directory for finished uploads')
            ->defaultValue('%kernel.project_dir%/public/uploads');

        $children->scalarNode('api_path')
            ->info('Path to the tus api')
            ->defaultValue('/_tus/upload');

        return $treeBuilder;
    }
}
