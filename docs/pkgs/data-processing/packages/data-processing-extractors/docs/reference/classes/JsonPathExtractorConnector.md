# Class: JsonPathExtractorConnector

Class for extracting data from a JSON source.

## Implements

- `IDataExtractorConnector`

## Constructors

### new JsonPathExtractorConnector()

> **new JsonPathExtractorConnector**(): [`JsonPathExtractorConnector`](JsonPathExtractorConnector.md)

#### Returns

[`JsonPathExtractorConnector`](JsonPathExtractorConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"json-path"`

The namespace supported by the data extractor connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataExtractorConnector.CLASS_NAME`

## Methods

### extract()

> **extract**(`data`, `rules`): `Promise`\<`unknown`\>

Extracts data from the provided input.

#### Parameters

##### data

`unknown`

The object to extract from.

##### rules

`IRule`[]

The rules to use to extract the data.

#### Returns

`Promise`\<`unknown`\>

The extracted data.

#### Implementation of

`IDataExtractorConnector.extract`
