# Class: IdentityPolicyInformationSource

Policy information source which retrieves the identity information.

## Implements

- `IPolicyInformationSource`
- `IComponent`

## Constructors

### Constructor

> **new IdentityPolicyInformationSource**(`options?`): `IdentityPolicyInformationSource`

Create a new instance of IdentityPolicyInformationSource.

#### Parameters

##### options?

[`IIdentityPolicyInformationSourceConstructorOptions`](../interfaces/IIdentityPolicyInformationSourceConstructorOptions.md)

The options for the logging policy source.

#### Returns

`IdentityPolicyInformationSource`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Identity Policy Information Source.

#### Implementation of

`IComponent.CLASS_NAME`

## Methods

### retrieve()

> **retrieve**\<`D`\>(`locator`, `accessMode`, `policies`, `data?`): `Promise`\<`undefined` \| `IJsonLdNodeObject`[]\>

Retrieve information from the sources.

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

##### policies

`IOdrlPolicy`[]

The policies that apply to the data.

##### data?

`D`

The data to process.

#### Returns

`Promise`\<`undefined` \| `IJsonLdNodeObject`[]\>

The objects containing relevant information or undefined if nothing relevant is found.

#### Implementation of

`IPolicyInformationSource.retrieve`
