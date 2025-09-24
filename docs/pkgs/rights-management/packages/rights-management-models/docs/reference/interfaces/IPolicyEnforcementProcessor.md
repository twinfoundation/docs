# Interface: IPolicyEnforcementProcessor

Interface for policy enforcement processors.

## Methods

### process()

> **process**\<`D`, `R`\>(`locator`, `decisions`, `data?`): `Promise`\<`R`\>

Process the response from the policy decision point.

#### Type Parameters

##### D

`D` = `unknown`

##### R

`R` = `D`

#### Parameters

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### decisions

[`IPolicyDecision`](IPolicyDecision.md)[]

The decisions made by the policy decision point.

##### data?

`D`

The data to process.

#### Returns

`Promise`\<`R`\>

The data after processing.
