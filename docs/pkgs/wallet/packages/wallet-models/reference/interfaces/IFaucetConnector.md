# Interface: IFaucetConnector

Interface describing a faucet connector.

## Extends

- `IService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### fundAddress()

> **fundAddress**(`address`, `timeoutInSeconds`?, `requestContext`?): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

• **address**: `string`

The bech32 encoded address of the address to fund.

• **timeoutInSeconds?**: `number`

The timeout in seconds to wait for the funding to complete.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.
