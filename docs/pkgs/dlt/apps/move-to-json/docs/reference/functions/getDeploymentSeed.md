# Function: getDeploymentSeed()

> **getDeploymentSeed**(`network`, `deployerSeed?`): `Promise`\<`string` \| `undefined`\>

Get the deployment seed for a network (if available).

## Parameters

### network

`NetworkTypes`

The target network.

### deployerSeed?

`string`

The deployer seed from environment variables (optional).

## Returns

`Promise`\<`string` \| `undefined`\>

The seed string or undefined if not set.

## Throws

GeneralError if seed is not found or invalid.
