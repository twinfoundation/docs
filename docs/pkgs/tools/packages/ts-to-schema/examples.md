# @gtsc/ts-to-schema - Examples

## Command Line Tool

First install the tool with the following script.

```shell
npm install @gtsc/ts-to-schema
```

You can then run the tool from the command line e.g.

```shell
ts-to-schema
```

You should see the following response:

```shell
TypeScript to Schema
====================

Usage:
        ts-to-schema <config-json> <output-folder>
Error: You must specify the config json
```

As you can see you must provide both a configuration file, and an output file.

An example configuration file looks as follows:

```json
{
  "baseUrl": "https://schema.gtsc.io/my-namespace/",
  "sourceFiles": ["./dist/types/*.d.ts"],
  "types": ["MyType1", "MyType2"]
}
```

If you save the example as `config.json` and then want the output in `output.json` you would use the following command line:

```shell
ts-to-schema config.json output.json
```

When running this command you should see the following output:

```shell
TypeScript to Schema
=====================

Config JSON: config.json
Output Folder: /schemas
Loading Config JSON: config.json
```
