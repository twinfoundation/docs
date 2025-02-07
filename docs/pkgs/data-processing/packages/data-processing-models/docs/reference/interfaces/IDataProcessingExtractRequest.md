# Interface: IDataProcessingExtractRequest

Perform an extraction on the data with the specified ruleset.

## Properties

### body

> **body**: `object`

The params for the extract.

#### ruleGroupId

> **ruleGroupId**: `string`

The rule group id to use for the extraction.

#### data

> **data**: `string`

The binary data to extract from in base64.

#### overrideExtractorType?

> `optional` **overrideExtractorType**: `string`

The default extractor connector will be used if not specified.
