# Class: TenantIdContextIdHandler

Context Id handler for testing as a tenant id.

## Implements

- `IContextIdHandler`

## Constructors

### Constructor

> **new TenantIdContextIdHandler**(): `TenantIdContextIdHandler`

#### Returns

`TenantIdContextIdHandler`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### short()

> **short**(`value`): `string`

The short form of the tenant id is the base64 version to compact.

#### Parameters

##### value

`string`

The full context id value.

#### Returns

`string`

Short form string.

#### Implementation of

`IContextIdHandler.short`

***

### guard()

> **guard**(`value`): `void`

Guard the value ensuring length.

#### Parameters

##### value

`string`

The value to guard.

#### Returns

`void`

#### Throws

GeneralError if the value is too short.

#### Implementation of

`IContextIdHandler.guard`
