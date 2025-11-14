# Class: JsonPathExtractorConnector

Class for extracting data from a JSON source.

## Implements

- `IDataExtractorConnector`

## Constructors

### Constructor

> **new JsonPathExtractorConnector**(): `JsonPathExtractorConnector`

#### Returns

`JsonPathExtractorConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"json-path"`

The namespace supported by the data extractor connector.

***

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

`IDataExtractorConnector.className`

***

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
