# Move to JSON CLI Examples

This CLI compiles IOTA Move contracts into Base64-encoded modules, computes package IDs (SHA3-256), and provides network-specific deployment capabilities with separate build and deploy commands.

## Prerequisites

- Node.js (v20+)
- IOTA CLI installed in your PATH for compilation. You can download the IOTA CLI by visiting the [IOTA CLI GitHub Releases](https://github.com/iotaledger/iota/releases) page and downloading the appropriate binary for your operating system.

## Command Structure

The tool now uses separate `build` and `deploy` subcommands:

- **`build`** - Compiles Move contracts and generates network-aware JSON structure
- **`deploy`** - Deploys compiled contracts to specified network using configuration files

## Build Command

### Build Basic Usage

```bash
# Build contracts and generate network-aware JSON
move-to-json build "src/contracts/**/*.move" --network testnet --output smart-contract-deployments.json
```

### What it does

- Find all .move files matching the glob pattern
- Compile each file using the IOTA Move compiler
- Compute deterministic package IDs from compiled bytecode
- Generate network-aware JSON structure with testnet, devnet, and mainnet sections
- Each network contains identical packageId and package data, with deployedPackageId initially set to null

### Example Output Structure

```json
{
  "testnet": {
    "packageId": "0x1bd7add2dc75ba6a840e21792a1ba51d807ce9c3b29c4fa2140f383e77988daa",
    "package": "oRzrCwYAAAAKAQAKAgoQ..."
  },
  "devnet": {
    "packageId": "0x1bd7add2dc75ba6a840e21792a1ba51d807ce9c3b29c4fa2140f383e77988daa",
    "package": "oRzrCwYAAAAKAQAKAgoQ..."
  },
  "mainnet": {
    "packageId": "0x1bd7add2dc75ba6a840e21792a1ba51d807ce9c3b29c4fa2140f383e77988daa",
    "package": "oRzrCwYAAAAKAQAKAgoQ..."
  }
}
```

## Deploy Command

### Deploy Basic Usage

```bash
# Deploy to testnet
move-to-json deploy --network testnet --contracts <PATH-TO-CONTRACTS> --load-env <PATH-TO-ENVS>

# Deploy to mainnet with force flag
move-to-json deploy --network mainnet --force --contracts <PATH-TO-CONTRACTS> --load-env <PATH-TO-ENVS>

# Dry run (simulate without deploying)
move-to-json deploy --network testnet --dry-run --contracts <PATH-TO-CONTRACTS> --load-env <PATH-TO-ENVS>
```

### What the deploy command does

1. **Environment Preparation**: Cleans build artifacts and updates Move.toml for target network
2. **Configuration Validation**: Loads and validates network configuration
3. **Contract Deployment**: Uses IOTA CLI to publish contracts with appropriate gas budgets
4. **JSON Updates**: Updates the smart-contract-deployments.json with actual deployed package IDs

## Complete Workflow Example

```bash
# 1. Build contracts for testnet
move-to-json build "src/contracts/**/*.move" --network testnet --output src/contracts/smart-contract-deployments.json

# 2. Deploy to testnet first
move-to-json deploy --network testnet --contracts <PATH-TO-CONTRACTS> --load-env <PATH-TO-ENVS>

# 3. Test and validate on testnet

# 4. Build contracts for mainnet
move-to-json build "src/contracts/**/*.move" --network mainnet --output src/contracts/smart-contract-deployments.json

# 5. Deploy to mainnet
move-to-json deploy --network mainnet --contracts <PATH-TO-CONTRACTS> --load-env <PATH-TO-ENVS>
```

## Security Considerations

- **Mainnet deployments** require careful configuration with appropriate gas budgets
- **Wallet credentials** should be stored securely using environment variables
- **Gas station integration** provides sponsored transactions for supported networks
- **Dry run mode** allows testing deployment logic without actual execution
