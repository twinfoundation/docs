# Interface: IJwtHeader

The fields in a JSON Web Token header.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### typ?

> `optional` **typ**: `string`

The type of the token.

***

### alg

> **alg**: [`JwtAlgorithms`](../type-aliases/JwtAlgorithms.md)

The algorithm used to sign the token.

***

### kid?

> `optional` **kid**: `string`

The key ID.
