# Class: JsonLdHelper

Class to help with JSON LD.

## Constructors

### Constructor

> **new JsonLdHelper**(): `JsonLdHelper`

#### Returns

`JsonLdHelper`

## Methods

### validate()

> `static` **validate**\<`T`\>(`document`, `validationFailures`, `options?`): `Promise`\<`boolean`\>

Validate a JSON-LD document.

#### Type Parameters

##### T

`T` *extends* [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md) = [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)

#### Parameters

##### document

`T`

The JSON-LD document to validate.

##### validationFailures

`IValidationFailure`[]

The list of validation failures to add to.

##### options?

Optional options for validation.

###### validationMode?

`ValidationMode`

The validation mode to use, defaults to either.

###### failOnMissingType?

`boolean`

If true, will fail validation if the data type is missing, defaults to false.

#### Returns

`Promise`\<`boolean`\>

True if the document was valid.
