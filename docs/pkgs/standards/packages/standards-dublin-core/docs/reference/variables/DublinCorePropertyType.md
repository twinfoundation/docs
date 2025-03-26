# Variable: DublinCorePropertyType

> `const` **DublinCorePropertyType**: `object`

Common Dublin Core property types for ODRL Policy Metadata.
Based on http://purl.org/dc/terms/

## Type declaration

### Creator

> `readonly` **Creator**: `"creator"` = `"creator"`

The individual, agent, or organisation that authored the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Description

> `readonly` **Description**: `"description"` = `"description"`

A human-readable representation or summary of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Issued

> `readonly` **Issued**: `"issued"` = `"issued"`

The date (and time) the Policy was first issued.
Note: String values may not be normalized and should not be used for direct comparison.

### Modified

> `readonly` **Modified**: `"modified"` = `"modified"`

The date (and time) the Policy was updated.
Note: String values may not be normalized and should not be used for direct comparison.

### Publisher

> `readonly` **Publisher**: `"publisher"` = `"publisher"`

The publisher of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Subject

> `readonly` **Subject**: `"subject"` = `"subject"`

The subject of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Coverage

> `readonly` **Coverage**: `"coverage"` = `"coverage"`

The jurisdiction under which the Policy is relevant.
Note: When using string values, they may not be normalized and should not be used for direct comparison.
Using "@id" references is preferred for comparison purposes.

### Replaces

> `readonly` **Replaces**: `"replaces"` = `"replaces"`

The identifier of a Policy that this Policy supersedes.
Using "@id" references is preferred for comparison purposes.

### IsReplacedBy

> `readonly` **IsReplacedBy**: `"isReplacedBy"` = `"isReplacedBy"`

The identifier of a Policy that supersedes this Policy.
Using "@id" references is preferred for comparison purposes.
