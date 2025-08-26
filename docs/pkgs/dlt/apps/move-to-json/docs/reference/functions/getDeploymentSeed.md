# Function: getDeploymentSeed()

> **getDeploymentSeed**(`network`): `Promise`\<`undefined` \| `string`\>

Get the deployment seed for a network (if available).

## Parameters

### network

`NetworkTypes`

The target network.

## Returns

`Promise`\<`undefined` \| `string`\>

The seed string or undefined if not set.

## Throws

GeneralError if seed is not found or invalid.
