<?php

$finder = PhpCsFixer\Finder::create()->in("src")->in("tests");

$config = new PhpCsFixer\Config();
return $config
    ->setRiskyAllowed(true)
    ->setRules([
        "@PSR12" => true,
        "@PSR12:risky" => true,
        "@PHP83Migration" => true,
        "@Symfony" => true,
        "@Symfony:risky" => true,
        "array_syntax" => ["syntax" => "short"],
        "binary_operator_spaces" => [
            "default" => "align",
            "operators" => ["=" => "single_space"],
        ],
        "phpdoc_to_return_type" => true,
        "phpdoc_to_param_type" => true,
        "cast_spaces" => ["space" => "single"],
        "native_function_invocation" => false,
    ])
    ->setFinder($finder);
