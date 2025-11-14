# Class: IotaSmartContractUtils

Utility class providing common smart contract operations for IOTA-based contracts.
This class uses composition pattern to provide shared functionality without inheritance complexity.

## Constructors

### Constructor

> **new IotaSmartContractUtils**(): `IotaSmartContractUtils`

#### Returns

`IotaSmartContractUtils`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### migrateSmartContract()

> `static` **migrateSmartContract**(`config`, `client`, `vaultConnector`, `walletConnector`, `logging`, `gasBudget`, `identity`, `objectId`, `namespace`, `packageId`, `deploymentConfig`, `walletAddressIndex?`): `Promise`\<`void`\>

Migrate a smart contract object to the current version using admin privileges.
This is a generic migration method that works with any IOTA smart contract.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### vaultConnector

`IVaultConnector`

The vault connector for key management.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### logging

Optional logging component.

`ILoggingComponent` | `undefined`

##### gasBudget

`number`

The gas budget for the transaction.

##### identity

`string`

The identity of the controller with admin privileges.

##### objectId

`string`

The ID of the object to migrate.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### deploymentConfig

[`ISmartContractDeployments`](../type-aliases/ISmartContractDeployments.md)

The deployment configuration containing object IDs.

##### walletAddressIndex?

`number`

Optional wallet address index for the controller.

#### Returns

`Promise`\<`void`\>

Promise that resolves when migration is complete.

***

### enableMigration()

> `static` **enableMigration**(`config`, `client`, `vaultConnector`, `walletConnector`, `logging`, `gasBudget`, `identity`, `namespace`, `packageId`, `deploymentConfig`, `walletAddressIndex?`): `Promise`\<`void`\>

Enable migration operations using admin privileges.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### vaultConnector

`IVaultConnector`

The vault connector for key management.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### logging

Optional logging component.

`ILoggingComponent` | `undefined`

##### gasBudget

`number`

The gas budget for the transaction.

##### identity

`string`

The identity of the controller with admin privileges.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### deploymentConfig

[`ISmartContractDeployments`](../type-aliases/ISmartContractDeployments.md)

The deployment configuration containing object IDs.

##### walletAddressIndex?

`number`

Optional wallet address index for the controller.

#### Returns

`Promise`\<`void`\>

Promise that resolves when migration is enabled.

***

### disableMigration()

> `static` **disableMigration**(`config`, `client`, `vaultConnector`, `walletConnector`, `logging`, `gasBudget`, `identity`, `namespace`, `packageId`, `deploymentConfig`, `walletAddressIndex?`): `Promise`\<`void`\>

Disable migration operations using admin privileges.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### vaultConnector

`IVaultConnector`

The vault connector for key management.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### logging

Optional logging component.

`ILoggingComponent` | `undefined`

##### gasBudget

`number`

The gas budget for the transaction.

##### identity

`string`

The identity of the controller with admin privileges.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### deploymentConfig

[`ISmartContractDeployments`](../type-aliases/ISmartContractDeployments.md)

The deployment configuration containing object IDs.

##### walletAddressIndex?

`number`

Optional wallet address index for the controller.

#### Returns

`Promise`\<`void`\>

Promise that resolves when migration is disabled.

***

### isMigrationActive()

> `static` **isMigrationActive**(`config`, `client`, `namespace`, `packageId`, `deploymentConfig`, `identity`, `walletConnector`, `walletAddressIndex?`): `Promise`\<`boolean`\>

Check if migration is currently active for a smart contract.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### deploymentConfig

[`ISmartContractDeployments`](../type-aliases/ISmartContractDeployments.md)

The deployment configuration containing object IDs.

##### identity

`string`

The identity for MigrationState discovery.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### walletAddressIndex?

`number`

Optional wallet address index.

#### Returns

`Promise`\<`boolean`\>

True if migration is enabled, false otherwise.

***

### getCurrentContractVersion()

> `static` **getCurrentContractVersion**(`config`, `client`, `namespace`, `packageId`, `identity`, `walletConnector`, `walletAddressIndex?`): `Promise`\<`number`\>

Get the current contract version from the deployed smart contract.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### identity

`string`

The identity for package controller address.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### walletAddressIndex?

`number`

Optional wallet address index.

#### Returns

`Promise`\<`number`\>

The current version number of the contract.

***

### validateObjectVersion()

> `static` **validateObjectVersion**\<`T`\>(`config`, `client`, `namespace`, `packageId`, `identity`, `objectId`, `walletConnector`, `versionExtractor`, `walletAddressIndex?`): `Promise`\<`boolean`\>

Validate that an object version is compatible with the current contract.

#### Type Parameters

##### T

`T`

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The IOTA configuration.

##### client

`IotaClient`

The IOTA client instance.

##### namespace

`string`

The contract namespace (e.g., "nft", "verifiable_storage").

##### packageId

`string`

The deployed package ID for the contract.

##### identity

`string`

The identity for version checking.

##### objectId

`string`

The object ID to validate.

##### walletConnector

`IWalletConnector`

The wallet connector for address generation.

##### versionExtractor

(`content`) => `number`

Function to extract version from object content.

##### walletAddressIndex?

`number`

Optional wallet address index.

#### Returns

`Promise`\<`boolean`\>

True if the object version is compatible, false otherwise.
