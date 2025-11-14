# Class: TenantAdminService

Service for performing email messaging operations to a connector.

## Implements

- [`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md)

## Constructors

### Constructor

> **new TenantAdminService**(`options?`): `TenantAdminService`

Create a new instance of TenantAdminService.

#### Parameters

##### options?

[`ITenantAdminServiceConstructorOptions`](../interfaces/ITenantAdminServiceConstructorOptions.md)

The options for the connector.

#### Returns

`TenantAdminService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`ITenantAdminComponent.className`

***

### get()

> **get**(`tenantId`): `Promise`\<[`ITenant`](../interfaces/ITenant.md) \| `undefined`\>

Get a tenant by its id.

#### Parameters

##### tenantId

`string`

The id of the tenant.

#### Returns

`Promise`\<[`ITenant`](../interfaces/ITenant.md) \| `undefined`\>

The tenant or undefined if not found.

#### Implementation of

[`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md).[`get`](../interfaces/ITenantAdminComponent.md#get)

***

### getByApiKey()

> **getByApiKey**(`apiKey`): `Promise`\<[`ITenant`](../interfaces/ITenant.md) \| `undefined`\>

Get a tenant by its api key.

#### Parameters

##### apiKey

`string`

The api key of the tenant.

#### Returns

`Promise`\<[`ITenant`](../interfaces/ITenant.md) \| `undefined`\>

The tenant or undefined if not found.

#### Implementation of

[`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md).[`getByApiKey`](../interfaces/ITenantAdminComponent.md#getbyapikey)

***

### set()

> **set**(`tenant`): `Promise`\<`void`\>

Set a tenant.

#### Parameters

##### tenant

[`ITenant`](../interfaces/ITenant.md)

The tenant to store.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md).[`set`](../interfaces/ITenantAdminComponent.md#set)

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

#### Implementation of

[`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md).[`remove`](../interfaces/ITenantAdminComponent.md#remove)

***

### query()

> **query**(`cursor?`, `limit?`): `Promise`\<\{ `tenants`: [`ITenant`](../interfaces/ITenant.md)[]; `cursor?`: `string`; \}\>

Query tenants with pagination.

#### Parameters

##### cursor?

`string`

The cursor to start from.

##### limit?

`number`

The maximum number of tenants to return.

#### Returns

`Promise`\<\{ `tenants`: [`ITenant`](../interfaces/ITenant.md)[]; `cursor?`: `string`; \}\>

The tenants and the next cursor if more tenants are available.

#### Implementation of

[`ITenantAdminComponent`](../interfaces/ITenantAdminComponent.md).[`query`](../interfaces/ITenantAdminComponent.md#query)
