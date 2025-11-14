# Class: DidContextIdHandler

Context Id handler for testing as a DID.

## Implements

- `IContextIdHandler`

## Constructors

### Constructor

> **new DidContextIdHandler**(): `DidContextIdHandler`

#### Returns

`DidContextIdHandler`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### short()

> **short**(`value`): `string`

Get the short form of the DID which is the last part.

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
