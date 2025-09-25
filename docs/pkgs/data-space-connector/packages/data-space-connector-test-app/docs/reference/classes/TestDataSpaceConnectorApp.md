# Class: TestDataSpaceConnectorApp

Test App Activity Handler.

## Implements

- `IDataSpaceConnectorApp`

## Constructors

### Constructor

> **new TestDataSpaceConnectorApp**(`options`): `TestDataSpaceConnectorApp`

Constructor options.

#### Parameters

##### options

`IDataSpaceConnectorAppConstructorOptions`

The constructor options.

#### Returns

`TestDataSpaceConnectorApp`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataSpaceConnectorApp.CLASS_NAME`

## Methods

### handleActivity()

> **handleActivity**\<`T`\>(`activity`): `Promise`\<`T`\>

Handle Activity.

#### Type Parameters

##### T

`T`

#### Parameters

##### activity

`IActivity`

Activity

#### Returns

`Promise`\<`T`\>

Activity processing result

#### Implementation of

`IDataSpaceConnectorApp.handleActivity`
