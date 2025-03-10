# Interface: IMultikey

Interface describing a Multikey.
https://www.w3.org/TR/cid-1.0/

## Properties

### @context?

> `optional` **@context**: `"https://www.w3.org/ns/cid/v1"` \| `"https://w3id.org/security/multikey/v1"` \| \[`"https://www.w3.org/ns/cid/v1"`, `...IJsonLdContextDefinitionElement[]`\] \| \[`"https://w3id.org/security/multikey/v1"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### id?

> `optional` **id**: `string`

The id of the entry.

***

### type

> **type**: `"Multikey"`

The type of the entry.

***

### controller?

> `optional` **controller**: `string`

The controller for the entry.

***

### publicKeyMultibase

> **publicKeyMultibase**: `string`

The public key for the entry.

***

### secretKeyMultibase?

> `optional` **secretKeyMultibase**: `string`

The secret key for the entry.

***

### expires?

> `optional` **expires**: `string`

The date the entry expires.

***

### revoked?

> `optional` **revoked**: `string`

The date the entry was revoked.
