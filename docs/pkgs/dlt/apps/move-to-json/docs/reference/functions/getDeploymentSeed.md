# Function: getDeploymentSeed()

> **getDeploymentSeed**(`network`, `deployerSeed?`): `Promise`\<`undefined` \| `string`\>

Get the deployment seed for a network (if available).

## Parameters

### network

`NetworkTypes`

The target network.

### deployerSeed?

`string`

The deployer seed from environment variables (optional).

## Returns

`Promise`\<`undefined` \| `string`\>

The seed string or undefined if not set.

## Throws

GeneralError if seed is not found or invalid.
