# @twin.org/move-to-json - Examples

## Move to JSON CLI

This CLI compiles one or more Move contracts (for either IOTA or SUI) into Base64-encoded modules, computes a package ID (SHA3-256), and merges the resulting data into a JSON file.

First install the tool with the following script.

```shell
npm install @twin.org/move-to-json
```

## Requirements

- IOTA Move CLI or SUI Move CLI installed in your PATH (for compilation). You can download the IOTA CLI by visiting the [IOTA CLI GitHub Releases](https://github.com/iotaledger/iota/releases) page and downloading the appropriate version for your operating system.

You can then run the tool from the command line e.g.

```shell
move-to-json
```

You should see the following response:

```shell
Starting Move to JSON
=====================

Usage:
        move-to-json <inputGlob> <outputJson> [--platform=<platform>]
Error: You must specify both input glob and output JSON path
```

As you can see, you must provide both an input glob pattern that matches your Move source files and an output JSON file path.

## Example Usage

A typical command looks like this:

```shell
move-to-json "./src/contracts/**/*.move" ./src/contracts/compiled-modules.json --platform=iota
```

This will:

- Find all .move files in src/contracts and its subdirectories
- Compile each file using the IOTA Move compiler (or SUI if --platform=sui)
- Create or update compiled-modules.json with the compiled bytecode

## Expected Project Structure

The tool expects a standard Move project structure:

```markdown
myProject/
Move.toml
sources/
myContract.move
myOtherContract.move
```

Where `myProject` is considered the `project root`:

- The CLI runs `iota move build` or `sui move build` in the project root (the folder containing Move.toml).
- The compiled .mv bytecode modules are placed under `build/<snake_case_package_name>/bytecode_modules`.
- The CLI loads these .mv files, computes a package ID (SHA3-256), and Base64-encodes them.

However, you can pass any glob pattern that matches one or more .move files. For each file, the CLI will move up one directory from wherever that file is located until it finds the Move.toml. As long as each .move file resides in a standard Move project folder (meaning you do have a Move.toml in its parent directory or above), this tool can find and build the contract.

For example, if your source is:

```markdown
./somewhere/nested/sources/myContract.move
./somewhere/nested/Move.toml
```

Then your glob might look like:

```shell
move-to-json "./somewhere/nested/sources/*.move" ./build/contracts.json
```

The CLI will automatically detect the project root as `./somewhere/nested` and run the Move compiler there.

## Output JSON Format

The resulting JSON file (e.g. `./src/contracts/contracts.json`) will be updated with an entry for each contract file. The key is the kebab-cased file name (e.g. `myContract.move` → `my-contract`).

Each entry has:

- packageId – A 0x-prefix hex string (computed SHA3-256 of all compiled modules).
- package – Either a single Base64-encoded string (if there is one compiled module) or an array of Base64 strings (if multiple modules).

An example snippet of the final JSON might look like:

```json
{
  "my-contract": {
    "packageId": "0xabc123...4f9",
    "package": "AAECAPN..."
  },
  "my-other-contract": {
    "packageId": "0xdef456ff...b81",
    "package": ["AAAEFW...", "AAABUK..."]
  }
}
```

If the JSON file already exists, the newly compiled contracts are merged in (existing entries are preserved unless they share the same key, in which case they are overwritten).
