# Interface: IPolicyInformationPointComponent

Interface describing a Policy Information Point (PEP) contract.
Provides additional information to the Policy Decision Point (PDP) when
it is making decisions.

## Extends

- `IComponent`

## Methods

### retrieve()

> **retrieve**\<`D`\>(`locator`, `accessMode`, `policies?`, `data?`): `Promise`\<[`IPolicyInformation`](IPolicyInformation.md)\>

Retrieve additional information which is relevant in the PDP decision making.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### accessMode

[`PolicyInformationAccessMode`](../type-aliases/PolicyInformationAccessMode.md)

The access mode to use for the retrieval.

##### policies?

`IOdrlPolicy`[]

The policies that apply to the data.

##### data?

`D`

The data to get any additional information for.

#### Returns

`Promise`\<[`IPolicyInformation`](IPolicyInformation.md)\>

Returns additional information based on the data and identities.

***

### registerSource()

> **registerSource**(`sourceId`, `source`): `Promise`\<`void`\>

Register a source to use for retrieval.

#### Parameters

##### sourceId

`string`

The id of the source to register.

##### source

[`IPolicyInformationSource`](IPolicyInformationSource.md)

The source to register.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterSource()

> **unregisterSource**(`sourceId`): `Promise`\<`void`\>

Unregister a source from the retrieval.

#### Parameters

##### sourceId

`string`

The id of the source to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.
