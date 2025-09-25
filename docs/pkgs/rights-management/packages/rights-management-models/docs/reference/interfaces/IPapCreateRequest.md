# Interface: IPapCreateRequest

The request structure for creating a policy.

## Properties

### body

> **body**: `Omit`\<`IOdrlPolicy`, `"uid"`\> & `object`

The body of the request - the policy to create (uid will be auto-generated).

#### Type Declaration

##### uid?

> `optional` **uid**: `string`
