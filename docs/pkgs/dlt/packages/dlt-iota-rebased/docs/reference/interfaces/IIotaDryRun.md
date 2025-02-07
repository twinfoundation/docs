# Interface: IIotaDryRun

Interface for the dry run transaction response.

## Properties

### status

> **status**: `string`

The status of the dry run.

***

### costs

> **costs**: `object`

The costs associated with the transaction.

#### computationCost

> **computationCost**: `string`

The computation cost.

#### computationCostBurned

> **computationCostBurned**: `string`

The computation cost that was burned.

#### storageCost

> **storageCost**: `string`

The storage cost.

#### storageRebate

> **storageRebate**: `string`

The storage rebate.

#### nonRefundableStorageFee

> **nonRefundableStorageFee**: `string`

The non-refundable storage fee.

***

### events

> **events**: `IotaEvent`[]

The events emitted during the dry run.

***

### balanceChanges

> **balanceChanges**: `BalanceChange`[]

The balance changes that occurred during the dry run.

***

### objectChanges

> **objectChanges**: `IotaObjectChange`[]

The object changes that occurred during the dry run.
