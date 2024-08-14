# Class: NftClient

Client for performing NFT through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `INftComponent`

## Constructors

### new NftClient()

> **new NftClient**(`config`): [`NftClient`](NftClient.md)

Create a new instance of NftClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`NftClient`](NftClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftComponent.CLASS_NAME`

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### mint()

> **mint**\<`T`, `U`\>(`issuer`, `tag`, `immutableMetadata`?, `metadata`?, `options`?): `Promise`\<`string`\>

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

Additional options for the NFT component.

• **options.namespace?**: `string`

The namespace of the connector to use for the NFT, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftComponent.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`): `Promise`\<`object`\>

Resolve an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to resolve.

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

#### Implementation of

`INftComponent.resolve`

***

### burn()

> **burn**(`id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **id**: `string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.burn`

***

### transfer()

> **transfer**\<`T`\>(`id`, `recipient`, `metadata`?): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.transfer`

***

### update()

> **update**\<`T`\>(`id`, `metadata`): `Promise`\<`void`\>

Update the data of the NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to update in urn format.

• **metadata**: `T`

The mutable data to update.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.update`
