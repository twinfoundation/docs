# Function: actionCommandDeploy()

> **actionCommandDeploy**(`opts`): `Promise`\<`void`\>

Action for the deploy command.

## Parameters

### opts

Command options.

#### contracts?

`string`

Path to compiled modules JSON.

#### network?

`NetworkTypes`

Network identifier - optional if NETWORK env var is set.

#### dryRun?

`boolean`

Simulate deployment without executing.

#### force?

`boolean`

Force redeployment of existing packages.

## Returns

`Promise`\<`void`\>
