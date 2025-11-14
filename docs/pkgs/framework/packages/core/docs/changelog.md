# @twin.org/core - Changelog

## [0.0.3-next.4](https://github.com/twinfoundation/framework/compare/core-v0.0.3-next.3...core-v0.0.3-next.4) (2025-11-13)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.3-next.3 to 0.0.3-next.4
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.3-next.3 to 0.0.3-next.4
    * @twin.org/nameof-vitest-plugin bumped from 0.0.3-next.3 to 0.0.3-next.4

## [0.0.3-next.3](https://github.com/twinfoundation/framework/compare/core-v0.0.3-next.2...core-v0.0.3-next.3) (2025-11-12)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.3-next.2 to 0.0.3-next.3
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.3-next.2 to 0.0.3-next.3
    * @twin.org/nameof-vitest-plugin bumped from 0.0.3-next.2 to 0.0.3-next.3

## [0.0.3-next.2](https://github.com/twinfoundation/framework/compare/core-v0.0.3-next.1...core-v0.0.3-next.2) (2025-11-12)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.3-next.1 to 0.0.3-next.2
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.3-next.1 to 0.0.3-next.2
    * @twin.org/nameof-vitest-plugin bumped from 0.0.3-next.1 to 0.0.3-next.2

## [0.0.3-next.1](https://github.com/twinfoundation/framework/compare/core-v0.0.3-next.0...core-v0.0.3-next.1) (2025-11-10)


### Features

* add context id features ([#206](https://github.com/twinfoundation/framework/issues/206)) ([ef0d4ee](https://github.com/twinfoundation/framework/commit/ef0d4ee11a4f5fc6cc6f52a4958ce905c04ee13b))
* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add Is.class method ([4988205](https://github.com/twinfoundation/framework/commit/498820543e256a130b4888c958fe1d87ca865d7f))
* add objectHelper.split ([386830a](https://github.com/twinfoundation/framework/commit/386830a77f8e842a5b119be0983708e042c3b14b))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add rsa cipher support ([7af6cc6](https://github.com/twinfoundation/framework/commit/7af6cc67512d3363bd4a2f2e87bd7733c2800147))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* additional nameof operators ([a5aab60](https://github.com/twinfoundation/framework/commit/a5aab60bf66a86f1b7ff8af7c4f044cb03706d50))
* additional RSA methods and async ([1fceee2](https://github.com/twinfoundation/framework/commit/1fceee2d1248a24a7620846025fcf906495c07f4))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* eslint migration to flat config ([74427d7](https://github.com/twinfoundation/framework/commit/74427d78d342167f7850e49ab87269326355befe))
* expand error params to accept properties ([032e9fd](https://github.com/twinfoundation/framework/commit/032e9fd1388e457cde32ca1005dfe014a5a9c077))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* improve Is.function and ModuleHelper.getModuleMethod signatures ([ecf968b](https://github.com/twinfoundation/framework/commit/ecf968b02934b3676be4bf7cd2d1e7f8e7af6ce2))
* improve Is.function definition to retain types ([f20b6b0](https://github.com/twinfoundation/framework/commit/f20b6b0dd16e74b75dc359be72b05989305c6410))
* locales validation ([#197](https://github.com/twinfoundation/framework/issues/197)) ([55fdadb](https://github.com/twinfoundation/framework/commit/55fdadb13595ce0047f787bd1d4135d429a99f12))
* nodeIdentity optional in IComponent methods ([c78dc17](https://github.com/twinfoundation/framework/commit/c78dc17f4357d3e1ae40e415f468d3eae13e81f4))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* simplify StringHelper signature ([0390403](https://github.com/twinfoundation/framework/commit/039040344952f91ee3c671249bc0e1c8f3b38e17))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* update dependencies ([f3bd015](https://github.com/twinfoundation/framework/commit/f3bd015efd169196b7e0335f5cab876ba6ca1d75))
* use cause instead of inner for errors ([1f4acc4](https://github.com/twinfoundation/framework/commit/1f4acc4d7a6b71a134d9547da9bf40de1e1e49da))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.3-next.0 to 0.0.3-next.1
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/nameof-vitest-plugin bumped from 0.0.3-next.0 to 0.0.3-next.1

## [0.0.2-next.22](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.21...core-v0.0.2-next.22) (2025-10-10)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.21 to 0.0.2-next.22
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.21 to 0.0.2-next.22
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.21 to 0.0.2-next.22

## [0.0.2-next.21](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.20...core-v0.0.2-next.21) (2025-10-09)


### Features

* locales validation ([#197](https://github.com/twinfoundation/framework/issues/197)) ([55fdadb](https://github.com/twinfoundation/framework/commit/55fdadb13595ce0047f787bd1d4135d429a99f12))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.20 to 0.0.2-next.21
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.20 to 0.0.2-next.21
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.20 to 0.0.2-next.21

## [0.0.2-next.20](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.19...core-v0.0.2-next.20) (2025-10-02)


### Features

* improve Is.function and ModuleHelper.getModuleMethod signatures ([ecf968b](https://github.com/twinfoundation/framework/commit/ecf968b02934b3676be4bf7cd2d1e7f8e7af6ce2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.19 to 0.0.2-next.20
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.19 to 0.0.2-next.20
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.19 to 0.0.2-next.20

## [0.0.2-next.19](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.18...core-v0.0.2-next.19) (2025-09-30)


### Features

* add objectHelper.split ([386830a](https://github.com/twinfoundation/framework/commit/386830a77f8e842a5b119be0983708e042c3b14b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.18 to 0.0.2-next.19
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.18 to 0.0.2-next.19
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.18 to 0.0.2-next.19

## [0.0.2-next.18](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.17...core-v0.0.2-next.18) (2025-09-29)


### Features

* simplify StringHelper signature ([0390403](https://github.com/twinfoundation/framework/commit/039040344952f91ee3c671249bc0e1c8f3b38e17))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.17 to 0.0.2-next.18
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.17 to 0.0.2-next.18
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.17 to 0.0.2-next.18

## [0.0.2-next.17](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.16...core-v0.0.2-next.17) (2025-09-29)


### Features

* additional nameof operators ([a5aab60](https://github.com/twinfoundation/framework/commit/a5aab60bf66a86f1b7ff8af7c4f044cb03706d50))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.16 to 0.0.2-next.17
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.16 to 0.0.2-next.17
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.16 to 0.0.2-next.17

## [0.0.2-next.16](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.15...core-v0.0.2-next.16) (2025-09-28)


### Features

* improve Is.function definition to retain types ([f20b6b0](https://github.com/twinfoundation/framework/commit/f20b6b0dd16e74b75dc359be72b05989305c6410))
* nodeIdentity optional in IComponent methods ([c78dc17](https://github.com/twinfoundation/framework/commit/c78dc17f4357d3e1ae40e415f468d3eae13e81f4))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.15 to 0.0.2-next.16
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.15 to 0.0.2-next.16
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.15 to 0.0.2-next.16

## [0.0.2-next.15](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.14...core-v0.0.2-next.15) (2025-09-22)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.14 to 0.0.2-next.15
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.14 to 0.0.2-next.15
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.14 to 0.0.2-next.15

## [0.0.2-next.14](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.13...core-v0.0.2-next.14) (2025-09-22)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.13 to 0.0.2-next.14
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.13 to 0.0.2-next.14

## [0.0.2-next.13](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.12...core-v0.0.2-next.13) (2025-09-22)


### Features

* expand error params to accept properties ([032e9fd](https://github.com/twinfoundation/framework/commit/032e9fd1388e457cde32ca1005dfe014a5a9c077))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.12 to 0.0.2-next.13
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.12 to 0.0.2-next.13

## [0.0.2-next.12](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.11...core-v0.0.2-next.12) (2025-09-15)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.11 to 0.0.2-next.12
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.11 to 0.0.2-next.12

## [0.0.2-next.11](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.10...core-v0.0.2-next.11) (2025-09-15)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.10 to 0.0.2-next.11
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.10 to 0.0.2-next.11

## [0.0.2-next.10](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.9...core-v0.0.2-next.10) (2025-09-11)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.9 to 0.0.2-next.10
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.9 to 0.0.2-next.10

## [0.0.2-next.9](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.8...core-v0.0.2-next.9) (2025-09-08)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.8 to 0.0.2-next.9
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.8 to 0.0.2-next.9

## [0.0.2-next.8](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.7...core-v0.0.2-next.8) (2025-09-05)


### Features

* add Is.class method ([4988205](https://github.com/twinfoundation/framework/commit/498820543e256a130b4888c958fe1d87ca865d7f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.7 to 0.0.2-next.8
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.7 to 0.0.2-next.8

## [0.0.2-next.7](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.6...core-v0.0.2-next.7) (2025-08-29)


### Features

* eslint migration to flat config ([74427d7](https://github.com/twinfoundation/framework/commit/74427d78d342167f7850e49ab87269326355befe))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.6 to 0.0.2-next.7
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.6 to 0.0.2-next.7

## [0.0.2-next.6](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.5...core-v0.0.2-next.6) (2025-08-27)


### Miscellaneous Chores

* **core:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.5 to 0.0.2-next.6
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.5 to 0.0.2-next.6

## [0.0.2-next.5](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.4...core-v0.0.2-next.5) (2025-08-19)


### Features

* use cause instead of inner for errors ([1f4acc4](https://github.com/twinfoundation/framework/commit/1f4acc4d7a6b71a134d9547da9bf40de1e1e49da))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.4 to 0.0.2-next.5
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.4 to 0.0.2-next.5

## [0.0.2-next.4](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.3...core-v0.0.2-next.4) (2025-08-15)


### Features

* additional RSA methods and async ([1fceee2](https://github.com/twinfoundation/framework/commit/1fceee2d1248a24a7620846025fcf906495c07f4))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.3 to 0.0.2-next.4
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.3 to 0.0.2-next.4

## [0.0.2-next.3](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.2...core-v0.0.2-next.3) (2025-08-06)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add rsa cipher support ([7af6cc6](https://github.com/twinfoundation/framework/commit/7af6cc67512d3363bd4a2f2e87bd7733c2800147))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* update dependencies ([f3bd015](https://github.com/twinfoundation/framework/commit/f3bd015efd169196b7e0335f5cab876ba6ca1d75))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.2 to 0.0.2-next.3
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.2 to 0.0.2-next.3

## [0.0.2-next.2](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.1...core-v0.0.2-next.2) (2025-08-06)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add rsa cipher support ([7af6cc6](https://github.com/twinfoundation/framework/commit/7af6cc67512d3363bd4a2f2e87bd7733c2800147))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* update dependencies ([f3bd015](https://github.com/twinfoundation/framework/commit/f3bd015efd169196b7e0335f5cab876ba6ca1d75))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.1 to 0.0.2-next.2
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.1 to 0.0.2-next.2

## [0.0.2-next.1](https://github.com/twinfoundation/framework/compare/core-v0.0.2-next.0...core-v0.0.2-next.1) (2025-08-06)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add rsa cipher support ([7af6cc6](https://github.com/twinfoundation/framework/commit/7af6cc67512d3363bd4a2f2e87bd7733c2800147))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* update dependencies ([f3bd015](https://github.com/twinfoundation/framework/commit/f3bd015efd169196b7e0335f5cab876ba6ca1d75))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.2-next.0 to 0.0.2-next.1
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.2-next.0 to 0.0.2-next.1
    * @twin.org/nameof-vitest-plugin bumped from 0.0.2-next.0 to 0.0.2-next.1

## 0.0.1 (2025-07-03)


### Features

* release to production ([829d53d](https://github.com/twinfoundation/framework/commit/829d53d3953b1e1b40b0243c04cfdfd3842aac7b))
* release to production ([5cf3a76](https://github.com/twinfoundation/framework/commit/5cf3a76a09eff2e6414d0cba846c7c37400a11d6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from ^0.0.0 to ^0.0.1
  * devDependencies
    * @twin.org/nameof-transformer bumped from ^0.0.0 to ^0.0.1
    * @twin.org/nameof-vitest-plugin bumped from ^0.0.0 to ^0.0.1

## [0.0.1-next.70](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.69...core-v0.0.1-next.70) (2025-07-02)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.1-next.69 to 0.0.1-next.70
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.1-next.69 to 0.0.1-next.70
    * @twin.org/nameof-vitest-plugin bumped from 0.0.1-next.69 to 0.0.1-next.70

## [0.0.1-next.69](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.68...core-v0.0.1-next.69) (2025-07-02)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.1-next.68 to 0.0.1-next.69
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.1-next.68 to 0.0.1-next.69
    * @twin.org/nameof-vitest-plugin bumped from 0.0.1-next.68 to 0.0.1-next.69

## [0.0.1-next.68](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.67...core-v0.0.1-next.68) (2025-07-02)


### Features

* relocate core packages from tools ([bcab8f3](https://github.com/twinfoundation/framework/commit/bcab8f3160442ea4fcaf442947462504f3d6a17d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/nameof bumped from 0.0.1-next.67 to 0.0.1-next.68
  * devDependencies
    * @twin.org/nameof-transformer bumped from 0.0.1-next.67 to 0.0.1-next.68
    * @twin.org/nameof-vitest-plugin bumped from 0.0.1-next.67 to 0.0.1-next.68

## [0.0.1-next.67](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.66...core-v0.0.1-next.67) (2025-06-26)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.66](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.65...core-v0.0.1-next.66) (2025-06-26)


### Features

* improve base error data extraction ([dccc933](https://github.com/twinfoundation/framework/commit/dccc93361a1544b41db0e7c126ff90e858d87960))

## [0.0.1-next.65](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.64...core-v0.0.1-next.65) (2025-06-19)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.64](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.63...core-v0.0.1-next.64) (2025-06-19)


### Features

* add zlib/deflate mime types detection ([72c472b](https://github.com/twinfoundation/framework/commit/72c472b5a35a973e7109336f5b6cdd84dbb8bbcb))

## [0.0.1-next.63](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.62...core-v0.0.1-next.63) (2025-06-18)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.62](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.61...core-v0.0.1-next.62) (2025-06-17)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))
* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))
* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))
* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))
* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))
* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))
* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))
* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))
* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))

## [0.0.1-next.61](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.60...core-v0.0.1-next.61) (2025-06-17)


### Features

* support indexed properties set in objects ([b9c001d](https://github.com/twinfoundation/framework/commit/b9c001dc4614f6ff7486f4370735a553613d823a))

## [0.0.1-next.60](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.59...core-v0.0.1-next.60) (2025-06-17)


### Features

* improve error display in CLI ([94b6ca8](https://github.com/twinfoundation/framework/commit/94b6ca8bdcfe3ca7671c4095b436ea7bddaae98e))

## [0.0.1-next.59](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.58...core-v0.0.1-next.59) (2025-06-17)


### Features

* propagate includeStackTrace on error conversion ([8471cbb](https://github.com/twinfoundation/framework/commit/8471cbb71f8fc98247a0e92126c438c1a8b04d9b))
* propagate includeStackTrace on error conversion ([818337d](https://github.com/twinfoundation/framework/commit/818337d50d14bf5a7e8b3204649aa7527115cca9))

## [0.0.1-next.58](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.57...core-v0.0.1-next.58) (2025-06-13)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.57](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.56...core-v0.0.1-next.57) (2025-06-10)


### Features

* add guards arrayEndsWith and arrayStartsWith ([95d875e](https://github.com/twinfoundation/framework/commit/95d875ec8ccb4713c145fdde941d4cfedcec2ed3))

## [0.0.1-next.56](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.55...core-v0.0.1-next.56) (2025-05-08)


### Features

* add ObjectOrArray and ArrayHelper methods ([0ac9077](https://github.com/twinfoundation/framework/commit/0ac907764d64b38ad1b04b0e9c3027055b527559))

## [0.0.1-next.55](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.54...core-v0.0.1-next.55) (2025-05-07)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.54](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.53...core-v0.0.1-next.54) (2025-05-06)


### Miscellaneous Chores

* **core:** Synchronize repo versions

## [0.0.1-next.53](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.52...core-v0.0.1-next.53) (2025-05-01)


### Features

* async cache don't cache failures unless requested ([658ec4b](https://github.com/twinfoundation/framework/commit/658ec4b67a58a075de4702a3886d151e25ad3ddc))

## [0.0.1-next.52](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.51...core-v0.0.1-next.52) (2025-04-17)


### Features

* use new shared store mechanism ([#131](https://github.com/twinfoundation/framework/issues/131)) ([934385b](https://github.com/twinfoundation/framework/commit/934385b2fbaf9f5c00a505ebf9d093bd5a425f55))

## [0.0.1-next.51](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.50...core-v0.0.1-next.51) (2025-03-27)


### Features

* simplify async set ([#121](https://github.com/twinfoundation/framework/issues/121)) ([2693c32](https://github.com/twinfoundation/framework/commit/2693c325266fd1a0aede6f1336c8b254c981a9ca))

## [0.0.1-next.50](https://github.com/twinfoundation/framework/compare/core-v0.0.1-next.49...core-v0.0.1-next.50) (2025-03-26)


### Features

* add set method for async caches ([ba34b55](https://github.com/twinfoundation/framework/commit/ba34b55e651ad56ab8fc59e139e4af631c19cda0))

## 0.0.1-next.49

- Initial Release
