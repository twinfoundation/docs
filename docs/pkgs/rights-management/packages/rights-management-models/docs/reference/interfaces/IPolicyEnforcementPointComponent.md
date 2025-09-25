# Interface: IPolicyEnforcementPointComponent

Interface describing a Policy Enforcement Point (PEP) contract.
Intercepts data and uses the Policy Decision Point (PDP) to make decisions on
access to a resource, based on the decision a manipulated data object can
be returned.

## Extends

- `IComponent`

## Methods

### intercept()

> **intercept**\<`D`, `R`\>(`locator`, `data?`): `Promise`\<`R`\>

Process the data using Policy Decision Point (PDP) and return the manipulated data.

#### Type Parameters

##### D

`D` = `unknown`

##### R

`R` = `D`

#### Parameters

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### data?

`D`

The data to process.

#### Returns

`Promise`\<`R`\>

The manipulated data with any policies applied.

***

### registerProcessor()

> **registerProcessor**(`processorId`, `processor`): `Promise`\<`void`\>

Register a processor to use for handling data.

#### Parameters

##### processorId

`string`

The id of the processor to register.

##### processor

[`IPolicyEnforcementProcessor`](IPolicyEnforcementProcessor.md)

The processor to register.

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterProcessor()

> **unregisterProcessor**(`processorId`): `Promise`\<`void`\>

Unregister a processor from the handling.

#### Parameters

##### processorId

`string`

The id of the processor to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.
