# Interface: INft

Interface describing an NFT service.

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

### mint()

> **mint**\<`T`, `U`\>(`issuer`, `tag`, `immutableMetadata`?, `metadata`?, `options`?, `requestContext`?): `Promise`\<`string`\>

Mint an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **issuer**: `string`

The issuer for the NFT, will also be the initial owner.

• **tag**: `string`

The tag for the NFT.

• **immutableMetadata?**: `T`

The immutable metadata for the NFT.

• **metadata?**: `U`

The metadata for the NFT.

• **options?**

Additional options for the NFT service.

• **options.namespace?**: `string`

The namespace of the connector to use for the NFT, defaults to service configured namespace.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`, `requestContext`?): `Promise`\<`object`\>

Resolve an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to resolve.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The data for the NFT.

##### issuer

> **issuer**: `string`

##### owner

> **owner**: `string`

##### tag

> **tag**: `string`

##### immutableMetadata?

> `optional` **immutableMetadata**: `T`

##### metadata?

> `optional` **metadata**: `U`

***

### burn()

> **burn**(`owner`, `id`, `requestContext`?): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **owner**: `string`

The owner for the NFT to return the funds to.

• **id**: `string`

The id of the NFT to burn in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### transfer()

> **transfer**\<`T`\>(`id`, `recipient`, `metadata`?, `requestContext`?): `Promise`\<`void`\>

Transfer an NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to transfer in urn format.

• **recipient**: `string`

The recipient of the NFT.

• **metadata?**: `T`

Optional mutable data to include during the transfer.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### update()

> **update**\<`T`\>(`id`, `metadata`, `requestContext`?): `Promise`\<`void`\>

Update the mutable data of the NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to update in urn format.

• **metadata**: `T`

The mutable data to update.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.
