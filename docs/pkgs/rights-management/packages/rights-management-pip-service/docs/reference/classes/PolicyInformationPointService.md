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

[`IPolicyInformationPointServiceOptions`](../interfaces/IPolicyInformationPointServiceOptions.md)

The options for the component.

#### Returns

`PolicyInformationPointService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Policy Information Point Service.

#### Implementation of

`IPolicyInformationPointComponent.CLASS_NAME`

## Methods

### retrieve()

> **retrieve**\<`T`\>(`assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`): `Promise`\<`IJsonLdNodeObject`[]\>

Retrieve additional information which is relevant in the PDP decision making.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### assetType

`string`

The type of asset being processed.

##### action

`string`

The action being performed on the asset.

##### data

The data to get any additional information for.

`undefined` | `T`

##### userIdentity

`string`

The user identity to get additional information for.

##### nodeIdentity

`string`

The node identity to get additional information for.

#### Returns

`Promise`\<`IJsonLdNodeObject`[]\>

Returns additional information based on the data and identities.

#### Implementation of

`IPolicyInformationPointComponent.retrieve`
