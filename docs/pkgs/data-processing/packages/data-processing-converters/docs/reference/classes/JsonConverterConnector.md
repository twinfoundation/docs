# Class: JsonConverterConnector

Class for converting data to JSON from bytes.

## Implements

- `IDataConverterConnector`

## Constructors

### new JsonConverterConnector()

> **new JsonConverterConnector**(): [`JsonConverterConnector`](JsonConverterConnector.md)

#### Returns

[`JsonConverterConnector`](JsonConverterConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"json"`

The namespace supported by the data converter connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataConverterConnector.CLASS_NAME`

## Methods

### mimeTypes()

> **mimeTypes**(): `string`[]

The MIME types that the converter can convert.

#### Returns

`string`[]

The MIME types.

#### Implementation of

`IDataConverterConnector.mimeTypes`

***

### convert()

> **convert**(`data`): `Promise`\<`unknown`\>

Converts the data to a structured object.

#### Parameters

##### data

`Uint8Array`

The data to extract from.

#### Returns

`Promise`\<`unknown`\>

The extracted data.

#### Implementation of

`IDataConverterConnector.convert`
