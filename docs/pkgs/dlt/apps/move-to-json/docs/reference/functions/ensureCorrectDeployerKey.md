# Function: ensureCorrectDeployerKey()

> **ensureCorrectDeployerKey**(`network`, `aliasName`, `expectedAddress`, `addressIndex`, `deployerMnemonic`): `Promise`\<`void`\>

Ensure the correct deployer key exists in the keystore with the expected address.
If a conflicting alias exists, rename it and import the correct key.

## Parameters

### network

`NetworkTypes`

The target network.

### aliasName

`string`

The desired alias name (e.g., "deployer-testnet").

### expectedAddress

`string`

The expected address from the current mnemonic.

### addressIndex

`number`

The address index to use.

### deployerMnemonic

`string`

The deployer mnemonic.

## Returns

`Promise`\<`void`\>
