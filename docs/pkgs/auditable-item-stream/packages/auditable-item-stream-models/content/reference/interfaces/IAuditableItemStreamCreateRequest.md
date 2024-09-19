# Interface: IAuditableItemStreamCreateRequest

Create an auditable item stream.

## Properties

### body?

> `optional` **body**: `object`

The data to be used in the stream.

#### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

The metadata to be used in the stream as JSON-LD.

#### entries?

> `optional` **entries**: `object`[]

The entries for the stream.

#### immutableInterval?

> `optional` **immutableInterval**: `number`

After how many entries do we add immutable checks, defaults to service configured value.
A value of 0 will disable immutable checks, 1 will be every item, or any other integer for an interval.
