# Interface: IContractData

Interface for contract data stored in smart-contract-deployments.json

## Properties

### packageId

> **packageId**: `string`

Package ID generated during build

***

### packageBytecode

> **packageBytecode**: `string` \| `string`[]

Base64-encoded package bytecode

***

### deployedPackageId?

> `optional` **deployedPackageId**: `string`

Package ID from actual deployment

***

### upgradeCapabilityId?

> `optional` **upgradeCapabilityId**: `string`

UpgradeCap object ID for package upgrades

***

### migrationStateId?

> `optional` **migrationStateId**: `string`

Migration state ID for tracking contract migrations
