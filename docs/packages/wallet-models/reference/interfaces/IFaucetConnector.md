# Interface: IFaucetConnector

Interface describing a faucet connector.

## Hierarchy

- `IService`

  ↳ **`IFaucetConnector`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

___

### fundAddress

▸ **fundAddress**(`requestContext`, `address`, `timeoutInSeconds?`): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `address` | `string` | The bech32 encoded address of the address to fund. |
| `timeoutInSeconds?` | `number` | The timeout in seconds to wait for the funding to complete. |

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.

___

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

___

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop
