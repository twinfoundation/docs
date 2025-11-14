# Class: XmlConverterConnector

Class for converting data to XML from bytes.

## Implements

- `IDataConverterConnector`

## Constructors

### Constructor

> **new XmlConverterConnector**(): `XmlConverterConnector`

#### Returns

`XmlConverterConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"xml"`

The namespace supported by the data converter connector.

***

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

`IDataConverterConnector.className`

***

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
