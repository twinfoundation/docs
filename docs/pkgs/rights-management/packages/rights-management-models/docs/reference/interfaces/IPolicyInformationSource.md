# Interface: IPolicyInformationSource

Interface for policy information sources.

## Methods

### retrieve()

> **retrieve**\<`D`\>(`locator`, `accessMode`, `policies?`, `data?`): `Promise`\<`undefined` \| [`IPolicyInformationItems`](../type-aliases/IPolicyInformationItems.md)\>

Retrieve information from the sources.

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

The data to process.

#### Returns

`Promise`\<`undefined` \| [`IPolicyInformationItems`](../type-aliases/IPolicyInformationItems.md)\>

The objects containing relevant information or undefined if nothing relevant is found.
