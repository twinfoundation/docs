# Class: DataProcessingService

Class for processing data from a source.

## Implements

- `IDataProcessingComponent`

## Constructors

### new DataProcessingService()

> **new DataProcessingService**(`options`?): [`DataProcessingService`](DataProcessingService.md)

Create a new instance of DataExtractionService.

#### Parameters

##### options?

[`IDataProcessingServiceConstructorOptions`](../interfaces/IDataProcessingServiceConstructorOptions.md)

The options for the connector.

#### Returns

[`DataProcessingService`](DataProcessingService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"data-processing"`

The namespace supported by the data processing service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataProcessingComponent.CLASS_NAME`

## Methods

### ruleGroupSet()

> **ruleGroupSet**(`ruleGroup`): `Promise`\<`void`\>

Set an extraction rule group.

#### Parameters

##### ruleGroup

`IRuleGroup`

The rule group to store.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataProcessingComponent.ruleGroupSet`

***

### ruleGroupGet()

> **ruleGroupGet**(`ruleGroupId`): `Promise`\<`IRuleGroup`\>

Get a rule group for extraction.

#### Parameters

##### ruleGroupId

`string`

The id of the rule group to get.

#### Returns

`Promise`\<`IRuleGroup`\>

The rule group.

#### Implementation of

`IDataProcessingComponent.ruleGroupGet`

***

### ruleGroupRemove()

> **ruleGroupRemove**(`ruleGroupId`): `Promise`\<`void`\>

Remove a rule group.

#### Parameters

##### ruleGroupId

`string`

The id of the rule group to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataProcessingComponent.ruleGroupRemove`

***

### extract()

> **extract**(`ruleGroupId`, `data`, `overrideExtractorType`?): `Promise`\<`unknown`\>

Extracts data from the from the provided input.

#### Parameters

##### ruleGroupId

`string`

The id of the rule group to use to extract data.

##### data

`Uint8Array`

The data to extract from.

##### overrideExtractorType?

`string`

An optional override for the extractor type.

#### Returns

`Promise`\<`unknown`\>

The extracted data.

#### Implementation of

`IDataProcessingComponent.extract`

***

### convert()

> **convert**(`data`, `overrideMimeType`?): `Promise`\<`unknown`\>

Converts data from the provided input to a structured JSON document.

#### Parameters

##### data

`Uint8Array`

The data to convert.

##### overrideMimeType?

`string`

An optional override for the mime type, will auto detect if empty.

#### Returns

`Promise`\<`unknown`\>

The converted data.

#### Implementation of

`IDataProcessingComponent.convert`
