# Interface: IAuditableItemStreamCreateRequest

Create an auditable item stream.

## Properties

### body

> **body**: `object`

The data to be used in the stream.

#### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

The object to be used in the stream as JSON-LD.

#### entries?

> `optional` **entries**: `object`[]

The entries for the stream.

#### immutableInterval?

> `optional` **immutableInterval**: `number`

After how many entries do we add immutable checks, defaults to service configured value.
A value of 0 will disable immutable checks, 1 will be every item, or any other integer for an interval.
