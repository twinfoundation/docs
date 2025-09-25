# Function: getDeploymentMnemonic()

> **getDeploymentMnemonic**(`network`, `deployerMnemonic?`): `Promise`\<`string`\>

Get the deployment mnemonic for a network.

## Parameters

### network

`NetworkTypes`

The target network.

### deployerMnemonic?

`string`

The deployer mnemonic from environment variables.

## Returns

`Promise`\<`string`\>

The mnemonic string.

## Throws

GeneralError if mnemonic is not found or invalid.
