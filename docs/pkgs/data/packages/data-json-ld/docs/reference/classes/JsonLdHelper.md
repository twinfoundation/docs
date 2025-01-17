# Class: JsonLdHelper

Class to help with JSON LD.

## Constructors

### new JsonLdHelper()

> **new JsonLdHelper**(): [`JsonLdHelper`](JsonLdHelper.md)

#### Returns

[`JsonLdHelper`](JsonLdHelper.md)

## Methods

### validate()

> `static` **validate**\<`T`\>(`document`, `validationFailures`, `validationMode`?): `Promise`\<`boolean`\>

Validate a JSON-LD document.

#### Type Parameters

• **T** *extends* [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md) = [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)

#### Parameters

##### document

`T`

The JSON-LD document to validate.

##### validationFailures

`IValidationFailure`[]

The list of validation failures to add to.

##### validationMode?

`ValidationMode`

The validation mode to use, defaults to either.

#### Returns

`Promise`\<`boolean`\>

True if the document was valid.
