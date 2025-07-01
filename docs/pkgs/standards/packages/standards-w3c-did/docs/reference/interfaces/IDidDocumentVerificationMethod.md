# Interface: IDidDocumentVerificationMethod

Interface describing a DID document verification method.

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### id

> **id**: `string`

The id of the entry.

***

### controller

> **controller**: `string`

The controller for the entry.

***

### type

> **type**: `string`

The type of the entry.

***

### publicKeyMultibase?

> `optional` **publicKeyMultibase**: `string`

The public key for the entry.
Spec https://datatracker.ietf.org/doc/html/draft-multiformats-multibase-03 .

***

### publicKeyJwk?

> `optional` **publicKeyJwk**: `IJwk` & `IJsonLdNodeObject`

The public key for the entry as a JWK.
Spec https://datatracker.ietf.org/doc/html/rfc7517 .

***

### revocation?

> `optional` **revocation**: `string`

Multi key partial revocation.
