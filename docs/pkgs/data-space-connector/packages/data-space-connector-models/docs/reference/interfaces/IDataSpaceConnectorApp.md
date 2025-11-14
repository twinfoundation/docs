# Interface: IDataSpaceConnectorApp

Interface describes a Data Space Connector App.

## Extends

- `IComponent`

## Methods

### activitiesHandled()

> **activitiesHandled**(): [`IActivityQuery`](IActivityQuery.md)[]

The activities handled by the App.

#### Returns

[`IActivityQuery`](IActivityQuery.md)[]

A query that describes the set of activities handled by the App.

***

### dataServicesHandled()

> **dataServicesHandled**(): [`IDataAssetQuery`](IDataAssetQuery.md)[]

The data services handled by the App.

#### Returns

[`IDataAssetQuery`](IDataAssetQuery.md)[]

A query that describes the set of Data Services handled by the App.

***

### supportedQueryTypes()

> **supportedQueryTypes**(): `string`[]

The types of queries supported.

#### Returns

`string`[]

The types of queries supported by the DS Connector App to retrieve data.

***

### handleActivity()?

> `optional` **handleActivity**\<`T`\>(`activity`): `Promise`\<`T`\>

Handles an Activity and report about results through the Data Space Connector Callback

#### Type Parameters

##### T

`T`

#### Parameters

##### activity

`IActivity`

The Activity to be handled

#### Returns

`Promise`\<`T`\>

The result of executing the Activity.

***

### handleDataRequest()?

> `optional` **handleDataRequest**(`dataRequest`): `Promise`\<\{ `data`: `IJsonLdDocument`; `cursor?`: `string`; \}\>

Handles a Data Request.

#### Parameters

##### dataRequest

[`IDataRequest`](../type-aliases/IDataRequest.md)

The data Request.

#### Returns

`Promise`\<\{ `data`: `IJsonLdDocument`; `cursor?`: `string`; \}\>

Data as JSON-Ld.
