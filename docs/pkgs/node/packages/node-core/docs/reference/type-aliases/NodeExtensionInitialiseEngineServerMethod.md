# Type Alias: NodeExtensionInitialiseEngineServerMethod()

> **NodeExtensionInitialiseEngineServerMethod** = (`engineCore`, `engineServer`) => `Promise`\<`void`\>

The type for the initialise engine server method of an extension module.
This is called when the engine server has been constructed but not yet started.

## Parameters

### engineCore

`IEngineCore`

The engine core instance.

### engineServer

`IEngineServer`

The engine server instance.

## Returns

`Promise`\<`void`\>
