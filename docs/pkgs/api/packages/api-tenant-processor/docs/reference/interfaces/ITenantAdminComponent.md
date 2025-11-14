# Interface: ITenantAdminComponent

Configuration for the tenant admin component

## Extends

- `IComponent`

## Methods

### get()

> **get**(`tenantId`): `Promise`\<[`ITenant`](ITenant.md) \| `undefined`\>

Get a tenant by its id.

#### Parameters

##### tenantId

`string`

The id of the tenant.

#### Returns

`Promise`\<[`ITenant`](ITenant.md) \| `undefined`\>

The tenant or undefined if not found.

***

### getByApiKey()

> **getByApiKey**(`apiKey`): `Promise`\<[`ITenant`](ITenant.md) \| `undefined`\>

Get a tenant by its api key.

#### Parameters

##### apiKey

`string`

The api key of the tenant.

#### Returns

`Promise`\<[`ITenant`](ITenant.md) \| `undefined`\>

The tenant or undefined if not found.

***

### set()

> **set**(`tenant`): `Promise`\<`void`\>

Set a tenant.

#### Parameters

##### tenant

[`ITenant`](ITenant.md)

The tenant to store.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### remove()

> **remove**(`tenantId`): `Promise`\<`void`\>

Remove a tenant by its id.

#### Parameters

##### tenantId

`string`

The id of the tenant.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`cursor?`, `limit?`): `Promise`\<\{ `tenants`: [`ITenant`](ITenant.md)[]; `cursor?`: `string`; \}\>

Query tenants with pagination.

#### Parameters

##### cursor?

`string`

The cursor to start from.

##### limit?

`number`

The maximum number of tenants to return.

#### Returns

`Promise`\<\{ `tenants`: [`ITenant`](ITenant.md)[]; `cursor?`: `string`; \}\>

The tenants and the next cursor if more tenants are available.
