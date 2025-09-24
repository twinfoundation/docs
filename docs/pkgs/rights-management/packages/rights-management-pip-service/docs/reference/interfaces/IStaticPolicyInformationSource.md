# Interface: IStaticPolicyInformationSource

Configuration for the Static Policy Information Source Component.

## Properties

### accessMode

> **accessMode**: `PolicyInformationAccessMode`

Is the information public, if so it will be shared with negotiation requests.

***

### matchLocators?

> `optional` **matchLocators**: `IPolicyLocator`[]

Information is only provided for the specified locator combination.
If undefined is provided matches all resources.

***

### objects

> **objects**: `IJsonLdNodeObject`[]

The objects containing the information.
