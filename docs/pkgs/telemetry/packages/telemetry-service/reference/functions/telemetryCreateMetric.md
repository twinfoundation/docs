# Function: telemetryCreateMetric()

> **telemetryCreateMetric**(`httpRequestContext`, `factoryServiceName`, `request`): `Promise`\<`ICreatedResponse`\>

Create a new telemetry metric.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `ITelemetryCreateMetricRequest`

The request.

## Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.
