# Interface: IDataProcessingComponent

Interface describing a component for processing data.

## Extends

- `IComponent`

## Methods

### ruleGroupSet()

> **ruleGroupSet**(`ruleGroup`): `Promise`\<`void`\>

Set an extraction rule group.

#### Parameters

##### ruleGroup

[`IRuleGroup`](IRuleGroup.md)

The rule group to store.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### ruleGroupGet()

> **ruleGroupGet**(`ruleGroupId`): `Promise`\<[`IRuleGroup`](IRuleGroup.md)\>

Get a rule group for extraction.

#### Parameters

##### ruleGroupId

`string`

The id of the rule group to get.

#### Returns

`Promise`\<[`IRuleGroup`](IRuleGroup.md)\>

The rule group.

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

***

### extract()

> **extract**(`ruleGroupId`, `data`, `overrideExtractorType?`): `Promise`\<`unknown`\>

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

#### Returns

`Promise`\<`unknown`\>

The extracted data.

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

***

### query()

> **query**(`cursor?`, `pageSize?`): `Promise`\<\{ `entities`: [`IRuleGroup`](IRuleGroup.md)[]; `cursor`: `string`; \}\>

Query the rule group entries.

#### Parameters

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: [`IRuleGroup`](IRuleGroup.md)[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.
