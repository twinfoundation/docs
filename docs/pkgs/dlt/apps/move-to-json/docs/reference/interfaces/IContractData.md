# Interface: IContractData

Interface for contract data stored in smart-contract-deployments.json

## Properties

### packageId

> **packageId**: `string`

Package ID generated during build

***

### package

> **package**: `string` \| `string`[]

Base64-encoded package bytecode

***

### deployedPackageId?

> `optional` **deployedPackageId**: `string`

Package ID from actual deployment

***

### upgradeCap?

> `optional` **upgradeCap**: `string`

UpgradeCap object ID for package upgrades
