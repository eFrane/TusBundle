# Changelog

## NEXT RELEASE

## v0.6

* **BREAKING** Symfony 4 and 5 support is dropped, this bundle requires Symfony 6 now
* **BREAKING** It is no longer possible to not define any package configuration
* **BREAKING** The `cache_dir` config no longer exists. Caching has been rewritten to allow
  bridging the native Symfony cache in addition to all the cache stores `tus-php` provides.
  
  If you want to keep the old behaviour, you need to change your config from
  
  ```yaml
  tus:
    cache_dir: 'your_value'
  ```
  
  to
 
  ```yaml
  tus:
    cache_type:
      file:
        dir: 'your_value'
  ```

  However, starting with this release, it is recommended to use the native cache instead:

  ```yaml
  tus:
    cache_type:
      native:
        enabled: true
  ```

## v0.5.1

* Minor autowiring fixes

## v0.5

First release.

