# Interface: IDataProcessingConvertRequest

Perform a conversion on the data.

## Properties

### body

> **body**: `object`

The params for the convert.

#### data

> **data**: `string`

The binary data to convert in base64.

#### overrideMimeType?

> `optional` **overrideMimeType**: `string`

Use the specified mime type for conversion, will auto detect if undefined.
