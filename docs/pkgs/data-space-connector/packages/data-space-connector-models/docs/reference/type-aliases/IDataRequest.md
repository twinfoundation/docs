# Type Alias: IDataRequest

> **IDataRequest** = [`IBaseDataRequest`](../interfaces/IBaseDataRequest.md) & \{ `type`: `"DataAssetEntities"`; `entitySet`: [`IEntitySet`](../interfaces/IEntitySet.md); \} \| \{ `type`: `"QueryDataAsset"`; `query`: [`IFilteringQuery`](../interfaces/IFilteringQuery.md); \}

Data Request type for representing data requests received by DS Connector Apps.
