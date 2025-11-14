# Function: initialiseMessagingSmsConnector()

> **initialiseMessagingSmsConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingSmsConnector`\>; `component?`: `IComponent`; \}\>

Initialise a messaging sms connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`MessagingSmsConnectorConfig`](../type-aliases/MessagingSmsConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingSmsConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
