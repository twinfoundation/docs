# Interface: IBlobStorage

Interface describing an blob storage service.

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

> **set**(`blob`, `options`?, `requestContext`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **options?**

Additional options for the blob service.

• **options.namespace?**: `string`

The namespace to use for storing, defaults to service configured namespace.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

***

### get()

> **get**(`id`, `requestContext`?): `Promise`\<`Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`Uint8Array`\>

The data for the blob if it can be found.

#### Throws

Not found error if the blob cannot be found.

***

### remove()

> **remove**(`id`, `requestContext`?): `Promise`\<`void`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Not found error if the blob cannot be found.
