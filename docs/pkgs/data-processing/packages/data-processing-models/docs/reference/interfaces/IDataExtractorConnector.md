# Interface: IDataExtractorConnector

Interface describing a connector for extracting data.

## Extends

- `IComponent`

## Methods

### extract()

> **extract**(`data`, `rules`): `Promise`\<`unknown`\>

Extracts data from the provided input.

#### Parameters

##### data

`unknown`

The object to extract from.

##### rules

[`IRule`](IRule.md)[]

The rules to use to extract the data.

#### Returns

`Promise`\<`unknown`\>

The extracted data.
