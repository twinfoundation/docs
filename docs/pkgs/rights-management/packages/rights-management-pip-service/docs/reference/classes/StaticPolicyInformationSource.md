# Class: StaticPolicyInformationSource

Policy information source which retrieves static information.

## Implements

- `IPolicyInformationSource`
- `IComponent`

## Constructors

### Constructor

> **new StaticPolicyInformationSource**(`options?`): `StaticPolicyInformationSource`

Create a new instance of StaticPolicyInformationSource.

#### Parameters

##### options?

[`IStaticPolicyInformationSourceConstructorOptions`](../interfaces/IStaticPolicyInformationSourceConstructorOptions.md)

The options for the logging policy source.

#### Returns

`StaticPolicyInformationSource`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

The class name of the Static Policy Information Source.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IComponent.className`

***

### retrieve()

> **retrieve**\<`D`\>(`locator`, `accessMode`, `policies`, `data?`): `Promise`\<`IJsonLdNodeObject`[] \| `undefined`\>

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

`Promise`\<`IJsonLdNodeObject`[] \| `undefined`\>

The objects containing relevant information or undefined if nothing relevant is found.

#### Implementation of

`IPolicyInformationSource.retrieve`

***

### addInformation()

> **addInformation**(`info`): `void`

Add static policy information.

#### Parameters

##### info

[`IStaticPolicyInformationSource`](../interfaces/IStaticPolicyInformationSource.md)

The static policy information to add.

#### Returns

`void`
