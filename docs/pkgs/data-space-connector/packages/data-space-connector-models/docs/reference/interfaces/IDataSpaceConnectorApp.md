# Interface: IDataSpaceConnectorApp

Interface describes a Data Space Connector App.

## Extends

- `IComponent`.[`IActivityHandler`](IActivityHandler.md)

## Methods

### handleActivity()

> **handleActivity**\<`T`\>(`activity`): `Promise`\<`T`\>

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

#### Inherited from

[`IActivityHandler`](IActivityHandler.md).[`handleActivity`](IActivityHandler.md#handleactivity)
