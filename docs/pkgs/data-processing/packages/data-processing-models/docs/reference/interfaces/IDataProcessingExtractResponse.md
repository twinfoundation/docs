# Interface: IDataProcessingExtractResponse

Response to extracting data.

## Properties

### body

> **body**: `unknown`

The extracted data in extended JSON format which keeps types like bigint, dates and uint8array intact.
Use ObjectHelper.fromExtended to get the object with original types.
