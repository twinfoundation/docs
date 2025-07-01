# Class: DataProcessingService

Class for processing data from a source.

## Implements

- `IDataProcessingComponent`

## Constructors

### Constructor

> **new DataProcessingService**(`options?`): `DataProcessingService`

Create a new instance of DataExtractionService.

#### Parameters

##### options?

[`IDataProcessingServiceConstructorOptions`](../interfaces/IDataProcessingServiceConstructorOptions.md)

The options for the connector.

#### Returns

`DataProcessingService`

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

> **extract**(`ruleGroupId`, `data`, `overrideExtractorType?`, `overrideMimeType?`): `Promise`\<`unknown`\>

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

##### overrideMimeType?

`string`

An optional override for the mime type for conversion, will auto detect if not provided.

#### Returns

`Promise`\<`unknown`\>

The extracted data.

#### Implementation of

`IDataProcessingComponent.extract`

***

### convert()

> **convert**(`data`, `overrideMimeType?`): `Promise`\<`unknown`\>

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

***

### query()

> **query**(`cursor?`, `pageSize?`): `Promise`\<\{ `entities`: `IRuleGroup`[]; `cursor?`: `string`; \}\>

Query the rule group entries.

#### Parameters

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `IRuleGroup`[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IDataProcessingComponent.query`
