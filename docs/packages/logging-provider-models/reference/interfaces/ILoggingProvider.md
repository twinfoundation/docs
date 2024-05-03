# Interface: ILoggingProvider

Interface describing a logging provider.

## Hierarchy

- `IService`

  ↳ **`ILoggingProvider`**

## Implemented by

- [`AggregatedLoggingProvider`](../classes/AggregatedLoggingProvider.md)
- [`SilentLoggingProvider`](../classes/SilentLoggingProvider.md)

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

### log

▸ **log**(`requestContext`, `logEntry`): `void`

Log an entry to the provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | [`ILogEntry`](ILogEntry.md) | The entry to log. |

#### Returns

`void`

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
