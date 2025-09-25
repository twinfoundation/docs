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

#### rpcUrl?

`string`

RPC endpoint URL for the network.

#### addressIndex?

`string`

Address index for key derivation.

#### rpcTimeout?

`string`

RPC request timeout in milliseconds.

#### gasBudget?

`string`

Gas budget for transactions.

#### confirmationTimeout?

`string`

Transaction confirmation timeout in milliseconds.

#### faucetUrl?

`string`

Faucet URL for requesting test tokens.

#### deployerMnemonic?

`string`

Deployer wallet mnemonic phrase.

#### deployerSeed?

`string`

Deployer wallet seed (alternative to mnemonic).

## Returns

`Promise`\<`void`\>
