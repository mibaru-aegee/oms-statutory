## [0.6.4](https://github.com/AEGEE/oms-statutory/compare/0.6.3...0.6.4) (2019-02-25)


### Bug Fixes

* **style:** fixed config for ESLint compliance ([c1df528](https://github.com/AEGEE/oms-statutory/commit/c1df528))
* **test:** fixed some tests that could fail randomly ([72c0783](https://github.com/AEGEE/oms-statutory/commit/72c0783))


### Features

* **style:** added ESLint checking for Travis. Fixes MEMB-459 ([ff0359a](https://github.com/AEGEE/oms-statutory/commit/ff0359a))



## [0.6.3](https://github.com/AEGEE/oms-statutory/compare/0.6.2...0.6.3) (2019-02-21)


### Bug Fixes

* **refactor:** refactor core requests. Fixes MEMB-439 ([7eabf61](https://github.com/AEGEE/oms-statutory/commit/7eabf61))



## [0.6.2](https://github.com/AEGEE/oms-statutory/compare/0.5.3...0.6.2) (2019-02-20)


### Bug Fixes

* **application:** allow boards to see applications. Fixes MEMB-464 ([84ad6da](https://github.com/AEGEE/oms-statutory/commit/84ad6da))
* **application:** required boolean answers. Fixes MEMB-450 ([1b9e13d](https://github.com/AEGEE/oms-statutory/commit/1b9e13d))
* **candidates:** sort positions. Fixes MEMB-472 ([cdb8b96](https://github.com/AEGEE/oms-statutory/commit/cdb8b96))
* **test:** fix tests that could fail randomly ([acdc504](https://github.com/AEGEE/oms-statutory/commit/acdc504))


### Features

* **export:** add filtering for applications. Fixes MEMB-388 ([51922ad](https://github.com/AEGEE/oms-statutory/commit/51922ad))



## [0.5.3](https://github.com/AEGEE/oms-statutory/compare/0.5.2...0.5.3) (2019-02-10)


### Bug Fixes

* **application:** display proper message on unique error for board ([d6e5296](https://github.com/AEGEE/oms-statutory/commit/d6e5296))
* **application:** row validation for visa fields. Required for MEMB-454 ([11a1f52](https://github.com/AEGEE/oms-statutory/commit/11a1f52))
* **board:** removed validation for uniqueness of userid ([38a7085](https://github.com/AEGEE/oms-statutory/commit/38a7085))
* **board:** row validations for pax type/order ([2def47a](https://github.com/AEGEE/oms-statutory/commit/2def47a))
* **candidates:** removed uniqueness validation ([b3f152d](https://github.com/AEGEE/oms-statutory/commit/b3f152d))
* **errors:** refactor errors to get more code coverage ([a1b3f5f](https://github.com/AEGEE/oms-statutory/commit/a1b3f5f))



## [0.5.2](https://github.com/AEGEE/oms-statutory/compare/0.5.1...0.5.2) (2019-02-10)


### Bug Fixes

* **general:** forgot to put the errors file into staging ([e86d287](https://github.com/AEGEE/oms-statutory/commit/e86d287))



## [0.5.1](https://github.com/AEGEE/oms-statutory/compare/0.5.0...0.5.1) (2019-02-10)



# [0.5.0](https://github.com/AEGEE/oms-statutory/compare/0.4.3...0.5.0) (2019-02-09)


### Features

* **memberslists:** display if the user is on memberslist ([0e6805b](https://github.com/AEGEE/oms-statutory/commit/0e6805b))



## [0.4.3](https://github.com/AEGEE/oms-statutory/compare/be680b8...0.4.3) (2019-02-09)


### Bug Fixes

* **candidates:** allow applying if not enough positions ([654e95c](https://github.com/AEGEE/oms-statutory/commit/654e95c))
* **massmailer:** do not sent massmailer if no users match ([89c9954](https://github.com/AEGEE/oms-statutory/commit/89c9954))
* **pax limits:** fixed PaxLimit unique constraint, test it. ([be680b8](https://github.com/AEGEE/oms-statutory/commit/be680b8))
* **refactor:** added whitelist helper, refactor and tests update ([024ecc8](https://github.com/AEGEE/oms-statutory/commit/024ecc8))
* **stats:** refactor and improved stats. Fixes MEMB-437 ([43a9402](https://github.com/AEGEE/oms-statutory/commit/43a9402))
* **tests:** fixed test that could fail randomly ([a88fa3a](https://github.com/AEGEE/oms-statutory/commit/a88fa3a))


### Features

* **export:** added selecting fields for export. Fixes MEMB-387 ([d199dc7](https://github.com/AEGEE/oms-statutory/commit/d199dc7))
* **export:** change permission, expose /incoming for export by LO ([1fe83f7](https://github.com/AEGEE/oms-statutory/commit/1fe83f7))
* **listing:** added /incoming for incoming LOs, changed permissions. Fixes MEMB-398 ([17f03bc](https://github.com/AEGEE/oms-statutory/commit/17f03bc))
* **massmailer:** added massmailer filters. Fixes MEMB-389 ([ce7320f](https://github.com/AEGEE/oms-statutory/commit/ce7320f))


