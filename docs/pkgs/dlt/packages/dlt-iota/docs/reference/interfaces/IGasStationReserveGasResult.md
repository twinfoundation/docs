# Interface: IGasStationReserveGasResult

Interface for the gas reservation result returned by the gas station.
This matches the snake_case format returned by the gas station API.

## Properties

### sponsor\_address

> **sponsor\_address**: `string`

The sponsor's on-chain address.

***

### reservation\_id

> **reservation\_id**: `number`

An ID used to reference this particular gas reservation.

***

### gas\_coins

> **gas\_coins**: `object`[]

References to the sponsor's coins that will pay gas.
