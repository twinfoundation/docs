# Interface: IDataAccessRequestPointServiceConfig

Options for the Data Access Request Point Component.

## Properties

### dataAccessComponentCreator()

> **dataAccessComponentCreator**: (`url`) => `Promise`\<`IDataAccessPointComponent`\>

A method for creating a new instance of the data access point component.
To be used when sending request remotely to another node.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`IDataAccessPointComponent`\>
