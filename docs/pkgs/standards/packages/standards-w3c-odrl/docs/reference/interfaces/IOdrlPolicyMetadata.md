# Interface: IOdrlPolicyMetadata

Interface for ODRL Policy Metadata using Dublin Core terms.
While these aren't explicitly defined in the ODRL spec, they are valid and useful metadata properties that follow Dublin Core standards.

## Properties

### dc:creator?

> `optional` **dc:creator**: `string` \| `string`[]

The individual, agent, or organisation that authored the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:description?

> `optional` **dc:description**: `string` \| `string`[]

A human-readable representation or summary of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:issued?

> `optional` **dc:issued**: `string`

The date (and time) the Policy was first issued.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:modified?

> `optional` **dc:modified**: `string`

The date (and time) the Policy was updated.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:publisher?

> `optional` **dc:publisher**: `string`

The publisher of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:subject?

> `optional` **dc:subject**: `string` \| `string`[]

The subject of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

***

### dc:coverage?

> `optional` **dc:coverage**: `string` \| \{ `@id`: `string`; \}

The jurisdiction under which the Policy is relevant.
Note: When using string values, they may not be normalized and should not be used for direct comparison.
Using "@id" references is preferred for comparison purposes.

***

### dc:replaces?

> `optional` **dc:replaces**: `string` \| \{ `@id`: `string`; \}

The identifier of a Policy that this Policy supersedes.
Using "@id" references is preferred for comparison purposes.

***

### dc:isReplacedBy?

> `optional` **dc:isReplacedBy**: `string` \| \{ `@id`: `string`; \}

The identifier of a Policy that supersedes this Policy.
Using "@id" references is preferred for comparison purposes.
