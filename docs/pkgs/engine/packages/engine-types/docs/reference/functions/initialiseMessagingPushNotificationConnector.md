# Function: initialiseMessagingPushNotificationConnector()

> **initialiseMessagingPushNotificationConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingPushNotificationsConnector`\>; `component?`: `IComponent`; \}\>

Initialise a messaging push notification connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`MessagingPushNotificationConnectorConfig`](../type-aliases/MessagingPushNotificationConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingPushNotificationsConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
