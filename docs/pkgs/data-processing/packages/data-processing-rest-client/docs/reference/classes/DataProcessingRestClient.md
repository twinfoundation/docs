# Class: DataProcessingRestClient

Client for performing data processing through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IDataProcessingComponent`

## Constructors

### Constructor

> **new DataProcessingRestClient**(`config`): `DataProcessingRestClient`

Create a new instance of DataProcessingRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`DataProcessingRestClient`

#### Overrides

`BaseRestClient.constructor`

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

`IDataProcessingComponent.className`

***

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

Extracts data from the provided input.

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

> **query**(`cursor?`, `limit?`): `Promise`\<\{ `entities`: `IRuleGroup`[]; `cursor?`: `string`; \}\>

Query the rule group entries.

#### Parameters

##### cursor?

`string`

The cursor to request the next chunk of entities.

##### limit?

`number`

Limit the number of entities to return.

#### Returns

`Promise`\<\{ `entities`: `IRuleGroup`[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IDataProcessingComponent.query`
