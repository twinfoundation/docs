# Interface: IOdrlPartyCollection

Interface for ODRL Party Collections.
A PartyCollection identifies a collection of entities and is a subclass of Party.

## Extends

- [`IOdrlParty`](IOdrlParty.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \}

## Properties

### uid?

> `optional` **uid**: `string`

The unique identifier for the party.
Must be an IRI.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`uid`](IOdrlParty.md#uid)

***

### @type?

> `optional` **@type**: `string` \| `string`[]

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`@type`](IOdrlParty.md#type)

***

### partOf?

> `optional` **partOf**: `string` \| `IOdrlPartyCollection`

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`partOf`](IOdrlParty.md#partof)

***

### assigneeOf?

> `optional` **assigneeOf**: `string`

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assigneeOf`](IOdrlParty.md#assigneeof)

***

### assignerOf?

> `optional` **assignerOf**: `string`

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assignerOf`](IOdrlParty.md#assignerof)

***

### source

> **source**: `string`

Reference to the source of the party collection.
Used to identify the origin or location of the collection.

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Refinements applied to the party collection.
Used to specify constraints that apply to all members of the collection.
