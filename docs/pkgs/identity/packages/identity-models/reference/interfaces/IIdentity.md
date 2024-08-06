# Interface: IIdentity

Interface describing a contract which provides identity operations.

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

> `optional` **start**(`systemIdentity`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

• **systemIdentity**: `string`

The identity of the system.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(`systemIdentity`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Parameters

• **systemIdentity**: `string`

The identity of the system.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### resolve()

> **resolve**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.
