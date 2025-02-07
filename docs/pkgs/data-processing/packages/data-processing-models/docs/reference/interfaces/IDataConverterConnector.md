# Interface: IDataConverterConnector

Interface describing a connector for extracting data.

## Extends

- `IComponent`

## Methods

### mimeTypes()

> **mimeTypes**(): `string`[]

The MIME types that the converter can convert.

#### Returns

`string`[]

The MIME types.

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
