# Class: CLI

The main entry point for the CLI.

## Extends

- `CLIBase`

## Constructors

### new CLI()

> **new CLI**(): [`CLI`](CLI.md)

#### Returns

[`CLI`](CLI.md)

#### Inherited from

`CLIBase.constructor`

## Methods

### run()

> **run**(`argv`, `localesDirectory`?, `options`?): `Promise`\<`number`\>

Run the app.

#### Parameters

• **argv**: `string`[]

The process arguments.

• **localesDirectory?**: `string`

The directory for the locales, default to relative to the script.

• **options?**

Additional options.

• **options.overrideOutputWidth?**: `number`

Override the output width.

#### Returns

`Promise`\<`number`\>

The exit code.

***

### configureRoot()

> `protected` **configureRoot**(`program`): `void`

Configure any options or actions at the root program level.

#### Parameters

• **program**: `Command`

The root program command.

#### Returns

`void`

#### Overrides

`CLIBase.configureRoot`
