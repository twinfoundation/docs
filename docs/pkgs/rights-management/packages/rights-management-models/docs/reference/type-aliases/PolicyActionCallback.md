# Type Alias: PolicyActionCallback()\<T\>

> **PolicyActionCallback**\<`T`\> = (`assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`, `policies`) => `Promise`\<`void`\>

Callback function type for policy actions.
This function is called when a policy action is executed.
It receives the asset type, action, data, user identity,
node identity, and the policies that apply to the data.
The function should return a promise that resolves when the action is complete.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### assetType

`string`

The type of asset being processed.

### action

`string`

The action being performed on the asset.

### data

The data to process.

`T` | `undefined`

### userIdentity

`string`

The user identity to use in the decision making.

### nodeIdentity

`string`

The node identity to use in the decision making.

### policies

`IOdrlPolicy`[]

The policies that apply to the data.

## Returns

`Promise`\<`void`\>

A promise that resolves when the action is complete.
