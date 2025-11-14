# @twin.org/rights-management-pap-service - Changelog

## [0.0.3-next.1](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.3-next.0...rights-management-service-v0.0.3-next.1) (2025-11-11)


### Features

* add context id features ([#51](https://github.com/twinfoundation/rights-management/issues/51)) ([239922c](https://github.com/twinfoundation/rights-management/commit/239922c82a7fa94b66c8ee0e924bc58ddaaba395))
* add DAP (Data Access Point) ([#40](https://github.com/twinfoundation/rights-management/issues/40)) ([f3e684b](https://github.com/twinfoundation/rights-management/commit/f3e684ba1f9a934394c64635f393fbb6709ff480))
* add JSON-LD types for negotiation ([6be61f8](https://github.com/twinfoundation/rights-management/commit/6be61f890537cb9d22d4fad90092b858de2c9c2d))
* add policy negotiation point PNP, PNAP and PNRP ([#32](https://github.com/twinfoundation/rights-management/issues/32)) ([90f0659](https://github.com/twinfoundation/rights-management/commit/90f06593a1126df3c2f4ca23cf95a08260fd6415))
* add scaffold for other services ([de25f34](https://github.com/twinfoundation/rights-management/commit/de25f34c40fb65b6d73df98965ea4e368019da84))
* add validate-locales ([78f30cf](https://github.com/twinfoundation/rights-management/commit/78f30cf61054655c815e5fc42972ee39502e3687))
* engine compatibility updates ([490e015](https://github.com/twinfoundation/rights-management/commit/490e015901d6a5ac6563da484a18fc5f285556b1))
* eslint migration to flat config ([5313718](https://github.com/twinfoundation/rights-management/commit/5313718f15efb4f6b1f257bf9807770baef7eed3))
* eslint migration to flat config ([23a0c08](https://github.com/twinfoundation/rights-management/commit/23a0c085e7fc2e522c8d85d325dc5844b9c3fd8e))
* international dataspaces contract negotiation ([#41](https://github.com/twinfoundation/rights-management/issues/41)) ([41ed515](https://github.com/twinfoundation/rights-management/commit/41ed5154d6cef48bc99db3158dbde6ec88523a0b))
* introduce context for additional environment input ([e1d0392](https://github.com/twinfoundation/rights-management/commit/e1d0392622e5a018b695644f423c5b23cc40d3b7))
* move create and verify proofs to helper ([a4e1f4a](https://github.com/twinfoundation/rights-management/commit/a4e1f4afe01ea12c36f29672197128e65819c875))
* pap create, update methods ([#13](https://github.com/twinfoundation/rights-management/issues/13)) ([edb6c9e](https://github.com/twinfoundation/rights-management/commit/edb6c9efcfda55ac96f7594253bf831b4f0e5993))
* pdp add ([#39](https://github.com/twinfoundation/rights-management/issues/39)) ([68b9a8a](https://github.com/twinfoundation/rights-management/commit/68b9a8a7a3cf2902f9eecb590ca3316c6b1671f0))
* remove element factories ([8cb4af8](https://github.com/twinfoundation/rights-management/commit/8cb4af85a5c9c01e3b68ecc7109cf701b914ea9a))
* remove unnecessary config options from service ([31ef3a2](https://github.com/twinfoundation/rights-management/commit/31ef3a2eb2293efdad7e6b8b55f105cc62bba3ed))
* remove unused namespace ([e8aa679](https://github.com/twinfoundation/rights-management/commit/e8aa679479231a49f86dd8dec5f9b811bd3f595f))
* rename pap entity storage to pap service ([38a2c14](https://github.com/twinfoundation/rights-management/commit/38a2c14d8f63a86e398820166c83437be5aca1b8))
* rights management pap ([#4](https://github.com/twinfoundation/rights-management/issues/4)) ([d1165a9](https://github.com/twinfoundation/rights-management/commit/d1165a92f57128731cfb308d977832e28cf33493))
* separate rest routes ([538b86b](https://github.com/twinfoundation/rights-management/commit/538b86be26b46711279101aa01fec119419d8149))
* update dependencies ([dd0a553](https://github.com/twinfoundation/rights-management/commit/dd0a553020b0dc5c41fb6865a2e36bd26045b0b9))
* update framework core ([d0ffcba](https://github.com/twinfoundation/rights-management/commit/d0ffcba9cf1dc2b562193ee298f099612d100ce8))
* update to use built in vc authentication ([f982b86](https://github.com/twinfoundation/rights-management/commit/f982b8676a7d21add85195c73558ef4f0fd9be29))
* update twindev schemas ([5d4edc1](https://github.com/twinfoundation/rights-management/commit/5d4edc1326fef611619d4b371a5d05a75ada719a))
* use Bearer format for token headers ([74d7d7c](https://github.com/twinfoundation/rights-management/commit/74d7d7cc59906c78798f78c5ed9211a3ee8dcd10))


### Bug Fixes

* adding missing dependency ([#15](https://github.com/twinfoundation/rights-management/issues/15)) ([c7e6267](https://github.com/twinfoundation/rights-management/commit/c7e62678b296ef8d28c31921cb78aeabe674cd84))
* modifying the function name for the rest routes ([#6](https://github.com/twinfoundation/rights-management/issues/6)) ([7915111](https://github.com/twinfoundation/rights-management/commit/7915111ac608c9d69bcaa819c85b553fc9bace6a))
* query params force coercion ([8590a0d](https://github.com/twinfoundation/rights-management/commit/8590a0da92584c04b67e73c448319f96f70c34a5))
* slimline openapi spec ([aacb9d5](https://github.com/twinfoundation/rights-management/commit/aacb9d50f80d3652ef7419ca3777f53e542773f1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.3-next.0 to 0.0.3-next.1
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pdp-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pep-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pip-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pmp-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pnp-service bumped from 0.0.3-next.0 to 0.0.3-next.1
    * @twin.org/rights-management-pxp-service bumped from 0.0.3-next.0 to 0.0.3-next.1

## [0.0.2-next.14](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.13...rights-management-service-v0.0.2-next.14) (2025-10-09)


### Features

* add validate-locales ([78f30cf](https://github.com/twinfoundation/rights-management/commit/78f30cf61054655c815e5fc42972ee39502e3687))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.13 to 0.0.2-next.14
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.13 to 0.0.2-next.14
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.13 to 0.0.2-next.14

## [0.0.2-next.13](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.12...rights-management-service-v0.0.2-next.13) (2025-09-23)


### Features

* update to use built in vc authentication ([f982b86](https://github.com/twinfoundation/rights-management/commit/f982b8676a7d21add85195c73558ef4f0fd9be29))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.12 to 0.0.2-next.13
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.12 to 0.0.2-next.13
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.12 to 0.0.2-next.13

## [0.0.2-next.12](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.11...rights-management-service-v0.0.2-next.12) (2025-09-22)


### Features

* use Bearer format for token headers ([74d7d7c](https://github.com/twinfoundation/rights-management/commit/74d7d7cc59906c78798f78c5ed9211a3ee8dcd10))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.11 to 0.0.2-next.12
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.11 to 0.0.2-next.12
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.11 to 0.0.2-next.12

## [0.0.2-next.11](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.10...rights-management-service-v0.0.2-next.11) (2025-09-19)


### Features

* engine compatibility updates ([490e015](https://github.com/twinfoundation/rights-management/commit/490e015901d6a5ac6563da484a18fc5f285556b1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.10 to 0.0.2-next.11
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.10 to 0.0.2-next.11
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.10 to 0.0.2-next.11

## [0.0.2-next.10](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.9...rights-management-service-v0.0.2-next.10) (2025-09-19)


### Features

* add DAP (Data Access Point) ([#40](https://github.com/twinfoundation/rights-management/issues/40)) ([f3e684b](https://github.com/twinfoundation/rights-management/commit/f3e684ba1f9a934394c64635f393fbb6709ff480))
* international dataspaces contract negotiation ([#41](https://github.com/twinfoundation/rights-management/issues/41)) ([41ed515](https://github.com/twinfoundation/rights-management/commit/41ed5154d6cef48bc99db3158dbde6ec88523a0b))
* move create and verify proofs to helper ([a4e1f4a](https://github.com/twinfoundation/rights-management/commit/a4e1f4afe01ea12c36f29672197128e65819c875))
* pdp add ([#39](https://github.com/twinfoundation/rights-management/issues/39)) ([68b9a8a](https://github.com/twinfoundation/rights-management/commit/68b9a8a7a3cf2902f9eecb590ca3316c6b1671f0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.9 to 0.0.2-next.10
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.9 to 0.0.2-next.10
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.9 to 0.0.2-next.10

## [0.0.2-next.9](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.8...rights-management-service-v0.0.2-next.9) (2025-09-08)


### Features

* add JSON-LD types for negotiation ([6be61f8](https://github.com/twinfoundation/rights-management/commit/6be61f890537cb9d22d4fad90092b858de2c9c2d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.8 to 0.0.2-next.9
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.8 to 0.0.2-next.9
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.8 to 0.0.2-next.9

## [0.0.2-next.8](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.7...rights-management-service-v0.0.2-next.8) (2025-09-05)


### Miscellaneous Chores

* **rights-management-service:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.7 to 0.0.2-next.8
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.7 to 0.0.2-next.8
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.7 to 0.0.2-next.8

## [0.0.2-next.7](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.6...rights-management-service-v0.0.2-next.7) (2025-09-05)


### Miscellaneous Chores

* **rights-management-service:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.6 to 0.0.2-next.7
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.6 to 0.0.2-next.7
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.6 to 0.0.2-next.7

## [0.0.2-next.6](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.5...rights-management-service-v0.0.2-next.6) (2025-09-05)


### Features

* separate rest routes ([538b86b](https://github.com/twinfoundation/rights-management/commit/538b86be26b46711279101aa01fec119419d8149))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.5 to 0.0.2-next.6
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.5 to 0.0.2-next.6
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.5 to 0.0.2-next.6

## [0.0.2-next.5](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.4...rights-management-service-v0.0.2-next.5) (2025-09-05)


### Features

* add policy negotiation point PNP, PNAP and PNRP ([#32](https://github.com/twinfoundation/rights-management/issues/32)) ([90f0659](https://github.com/twinfoundation/rights-management/commit/90f06593a1126df3c2f4ca23cf95a08260fd6415))
* introduce context for additional environment input ([e1d0392](https://github.com/twinfoundation/rights-management/commit/e1d0392622e5a018b695644f423c5b23cc40d3b7))
* remove element factories ([8cb4af8](https://github.com/twinfoundation/rights-management/commit/8cb4af85a5c9c01e3b68ecc7109cf701b914ea9a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.4 to 0.0.2-next.5
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pnp-service bumped from 0.0.2-next.4 to 0.0.2-next.5
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.4 to 0.0.2-next.5

## [0.0.2-next.4](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.3...rights-management-service-v0.0.2-next.4) (2025-08-29)


### Features

* eslint migration to flat config ([5313718](https://github.com/twinfoundation/rights-management/commit/5313718f15efb4f6b1f257bf9807770baef7eed3))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.3 to 0.0.2-next.4
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.3 to 0.0.2-next.4
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.3 to 0.0.2-next.4

## [0.0.2-next.3](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.2...rights-management-service-v0.0.2-next.3) (2025-08-29)


### Features

* eslint migration to flat config ([23a0c08](https://github.com/twinfoundation/rights-management/commit/23a0c085e7fc2e522c8d85d325dc5844b9c3fd8e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.2 to 0.0.2-next.3
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.2 to 0.0.2-next.3
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.2 to 0.0.2-next.3

## [0.0.2-next.2](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.1...rights-management-service-v0.0.2-next.2) (2025-08-22)


### Features

* add scaffold for other services ([de25f34](https://github.com/twinfoundation/rights-management/commit/de25f34c40fb65b6d73df98965ea4e368019da84))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.1 to 0.0.2-next.2
  * devDependencies
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/rights-management-pdp-service bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/rights-management-pep-service bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/rights-management-pip-service bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/rights-management-pmp-service bumped from 0.0.2-next.1 to 0.0.2-next.2
    * @twin.org/rights-management-pxp-service bumped from 0.0.2-next.1 to 0.0.2-next.2

## [0.0.2-next.1](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.2-next.0...rights-management-service-v0.0.2-next.1) (2025-08-20)


### Features

* pap create, update methods ([#13](https://github.com/twinfoundation/rights-management/issues/13)) ([edb6c9e](https://github.com/twinfoundation/rights-management/commit/edb6c9efcfda55ac96f7594253bf831b4f0e5993))
* remove unnecessary config options from service ([31ef3a2](https://github.com/twinfoundation/rights-management/commit/31ef3a2eb2293efdad7e6b8b55f105cc62bba3ed))
* remove unused namespace ([e8aa679](https://github.com/twinfoundation/rights-management/commit/e8aa679479231a49f86dd8dec5f9b811bd3f595f))
* rename pap entity storage to pap service ([38a2c14](https://github.com/twinfoundation/rights-management/commit/38a2c14d8f63a86e398820166c83437be5aca1b8))
* rights management pap ([#4](https://github.com/twinfoundation/rights-management/issues/4)) ([d1165a9](https://github.com/twinfoundation/rights-management/commit/d1165a92f57128731cfb308d977832e28cf33493))
* update dependencies ([dd0a553](https://github.com/twinfoundation/rights-management/commit/dd0a553020b0dc5c41fb6865a2e36bd26045b0b9))
* update framework core ([d0ffcba](https://github.com/twinfoundation/rights-management/commit/d0ffcba9cf1dc2b562193ee298f099612d100ce8))
* update twindev schemas ([5d4edc1](https://github.com/twinfoundation/rights-management/commit/5d4edc1326fef611619d4b371a5d05a75ada719a))


### Bug Fixes

* adding missing dependency ([#15](https://github.com/twinfoundation/rights-management/issues/15)) ([c7e6267](https://github.com/twinfoundation/rights-management/commit/c7e62678b296ef8d28c31921cb78aeabe674cd84))
* modifying the function name for the rest routes ([#6](https://github.com/twinfoundation/rights-management/issues/6)) ([7915111](https://github.com/twinfoundation/rights-management/commit/7915111ac608c9d69bcaa819c85b553fc9bace6a))
* query params force coercion ([8590a0d](https://github.com/twinfoundation/rights-management/commit/8590a0da92584c04b67e73c448319f96f70c34a5))
* slimline openapi spec ([aacb9d5](https://github.com/twinfoundation/rights-management/commit/aacb9d50f80d3652ef7419ca3777f53e542773f1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.2-next.0 to 0.0.2-next.1
    * @twin.org/rights-management-pap-service bumped from 0.0.2-next.0 to 0.0.2-next.1

## 0.0.1 (2025-07-08)


### Features

* release to production ([947f85a](https://github.com/twinfoundation/rights-management/commit/947f85ab9e23c117135dba7008a75c2d85435259))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from ^0.0.0 to ^0.0.1
    * @twin.org/rights-management-pap-service bumped from ^0.0.0 to ^0.0.1

## [0.0.1-next.12](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.11...rights-management-service-v0.0.1-next.12) (2025-06-26)


### Miscellaneous Chores

* **rights-management-service:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.11 to 0.0.1-next.12
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.11 to 0.0.1-next.12

## [0.0.1-next.11](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.10...rights-management-service-v0.0.1-next.11) (2025-06-20)


### Bug Fixes

* query params force coercion ([8590a0d](https://github.com/twinfoundation/rights-management/commit/8590a0da92584c04b67e73c448319f96f70c34a5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.10 to 0.0.1-next.11
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.10 to 0.0.1-next.11

## [0.0.1-next.10](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.9...rights-management-service-v0.0.1-next.10) (2025-06-12)


### Features

* update dependencies ([dd0a553](https://github.com/twinfoundation/rights-management/commit/dd0a553020b0dc5c41fb6865a2e36bd26045b0b9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.9 to 0.0.1-next.10
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.9 to 0.0.1-next.10

## [0.0.1-next.9](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.8...rights-management-service-v0.0.1-next.9) (2025-06-06)


### Features

* pap create, update methods ([#13](https://github.com/twinfoundation/rights-management/issues/13)) ([edb6c9e](https://github.com/twinfoundation/rights-management/commit/edb6c9efcfda55ac96f7594253bf831b4f0e5993))
* remove unnecessary config options from service ([31ef3a2](https://github.com/twinfoundation/rights-management/commit/31ef3a2eb2293efdad7e6b8b55f105cc62bba3ed))
* rename pap entity storage to pap service ([38a2c14](https://github.com/twinfoundation/rights-management/commit/38a2c14d8f63a86e398820166c83437be5aca1b8))
* rights management pap ([#4](https://github.com/twinfoundation/rights-management/issues/4)) ([d1165a9](https://github.com/twinfoundation/rights-management/commit/d1165a92f57128731cfb308d977832e28cf33493))


### Bug Fixes

* adding missing dependency ([#15](https://github.com/twinfoundation/rights-management/issues/15)) ([c7e6267](https://github.com/twinfoundation/rights-management/commit/c7e62678b296ef8d28c31921cb78aeabe674cd84))
* modifying the function name for the rest routes ([#6](https://github.com/twinfoundation/rights-management/issues/6)) ([7915111](https://github.com/twinfoundation/rights-management/commit/7915111ac608c9d69bcaa819c85b553fc9bace6a))
* slimline openapi spec ([aacb9d5](https://github.com/twinfoundation/rights-management/commit/aacb9d50f80d3652ef7419ca3777f53e542773f1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.8 to 0.0.1-next.9
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.8 to 0.0.1-next.9

## [0.0.1-next.8](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.7...rights-management-service-v0.0.1-next.8) (2025-06-05)


### Features

* pap create, update methods ([#13](https://github.com/twinfoundation/rights-management/issues/13)) ([edb6c9e](https://github.com/twinfoundation/rights-management/commit/edb6c9efcfda55ac96f7594253bf831b4f0e5993))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.7 to 0.0.1-next.8
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.7 to 0.0.1-next.8

## [0.0.1-next.7](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.6...rights-management-service-v0.0.1-next.7) (2025-06-02)


### Miscellaneous Chores

* **rights-management-service:** Synchronize repo versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.6 to 0.0.1-next.7
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.6 to 0.0.1-next.7

## [0.0.1-next.6](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.5...rights-management-service-v0.0.1-next.6) (2025-05-29)


### Features

* remove unnecessary config options from service ([31ef3a2](https://github.com/twinfoundation/rights-management/commit/31ef3a2eb2293efdad7e6b8b55f105cc62bba3ed))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.5 to 0.0.1-next.6
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.5 to 0.0.1-next.6

## [0.0.1-next.5](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.4...rights-management-service-v0.0.1-next.5) (2025-05-29)


### Features

* rename pap entity storage to pap service ([38a2c14](https://github.com/twinfoundation/rights-management/commit/38a2c14d8f63a86e398820166c83437be5aca1b8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.4 to 0.0.1-next.5
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.4 to 0.0.1-next.5

## [0.0.1-next.4](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.3...rights-management-service-v0.0.1-next.4) (2025-05-28)


### Bug Fixes

* modifying the function name for the rest routes ([#6](https://github.com/twinfoundation/rights-management/issues/6)) ([7915111](https://github.com/twinfoundation/rights-management/commit/7915111ac608c9d69bcaa819c85b553fc9bace6a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.3 to 0.0.1-next.4
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.3 to 0.0.1-next.4

## [0.0.1-next.3](https://github.com/twinfoundation/rights-management/compare/rights-management-service-v0.0.1-next.2...rights-management-service-v0.0.1-next.3) (2025-05-28)


### Features

* rights management pap ([#4](https://github.com/twinfoundation/rights-management/issues/4)) ([d1165a9](https://github.com/twinfoundation/rights-management/commit/d1165a92f57128731cfb308d977832e28cf33493))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/rights-management-models bumped from 0.0.1-next.2 to 0.0.1-next.3
    * @twin.org/rights-management-pap-service bumped from 0.0.1-next.2 to 0.0.1-next.3

## 0.0.1-next.1

- Initial release.
