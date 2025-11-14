# Class: PolicyInformationPointService

Class implementation of Policy Information Point Component.

## Implements

- `IPolicyInformationPointComponent`

## Constructors

### Constructor

> **new PolicyInformationPointService**(`options?`): `PolicyInformationPointService`

Create a new instance of PolicyInformationPointService (PIP).

#### Parameters

##### options?

[`IPolicyInformationPointServiceConstructorOptions`](../interfaces/IPolicyInformationPointServiceConstructorOptions.md)

The options for the component.

#### Returns

`PolicyInformationPointService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

The class name of the Policy Information Point Service.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IPolicyInformationPointComponent.className`

***

### retrieve()

> **retrieve**\<`D`\>(`locator`, `accessMode`, `policies?`, `data?`): `Promise`\<`IPolicyInformation`\>

Retrieve additional information which is relevant in the PDP decision making.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### locator

`IPolicyLocator`

The locator to find relevant policies.

##### accessMode

`PolicyInformationAccessMode`

The access mode to use for the retrieval.

##### policies?

`IOdrlPolicy`[]

The policies that apply to the data.

##### data?

`D`

The data to get any additional information for.

#### Returns

`Promise`\<`IPolicyInformation`\>

Returns additional information based on the data and identities.

#### Implementation of

`IPolicyInformationPointComponent.retrieve`

***

### registerSource()

> **registerSource**(`sourceId`, `source`): `Promise`\<`void`\>

Register a source to use for retrieval.

#### Parameters

##### sourceId

`string`

The id of the source to register.

##### source

`IPolicyInformationSource`

The source to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyInformationPointComponent.registerSource`

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

#### Implementation of

`IPolicyInformationPointComponent.unregisterSource`
