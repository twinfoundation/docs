# Interface: IDataSpaceConnectorAppDescriptor

Interface describes a Data Space Connector App.

## Properties

### id

> **id**: `string`

A URI that denotes the identifier of the App.

***

### activitiesHandled

> **activitiesHandled**: [`IActivityQuery`](IActivityQuery.md)[]

The activities handled by this Data Space Connector App.

***

### moduleName

> **moduleName**: `string`

The module that implements this DS Connector App

***

### initialiserName?

> `optional` **initialiserName**: `string`

The function that allows the initialisation of this DS Connector App

#### Default

```ts
"appInitialiser"
```
