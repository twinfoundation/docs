# Interface: IBlobStorageConnector

Interface describing an blob storage connector.

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

> `optional` **bootstrap**(`requestContext`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### set()

> **set**(`blob`, `requestContext`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

***

### get()

> **get**(`id`, `requestContext`?): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

***

### remove()

> **remove**(`id`, `requestContext`?): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.
