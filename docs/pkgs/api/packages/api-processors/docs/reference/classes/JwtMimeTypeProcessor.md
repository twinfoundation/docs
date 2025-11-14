# Class: JwtMimeTypeProcessor

Process the JWT mime type.

## Implements

- `IMimeTypeProcessor`

## Constructors

### Constructor

> **new JwtMimeTypeProcessor**(): `JwtMimeTypeProcessor`

#### Returns

`JwtMimeTypeProcessor`

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

`IMimeTypeProcessor.className`

***

### getTypes()

> **getTypes**(): `string`[]

Get the MIME types that this handler can handle.

#### Returns

`string`[]

The MIME types that this handler can handle.

#### Implementation of

`IMimeTypeProcessor.getTypes`

***

### handle()

> **handle**(`body`): `Promise`\<`unknown`\>

Handle content.

#### Parameters

##### body

`Uint8Array`

The body to process.

#### Returns

`Promise`\<`unknown`\>

The processed body.

#### Implementation of

`IMimeTypeProcessor.handle`
