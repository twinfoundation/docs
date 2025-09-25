# Function: validateDeploymentEnvironment()

> **validateDeploymentEnvironment**(`network`, `deployerMnemonic`): `Promise`\<`void`\>

Validate that required environment variables are set for deployment.

## Parameters

### network

`NetworkTypes`

The target network.

### deployerMnemonic

`string`

The deployer mnemonic to validate.

## Returns

`Promise`\<`void`\>

## Throws

GeneralError if required environment variables are missing.
