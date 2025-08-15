# TWIN Move to JSON

Tool to convert Move source files to JSON with network-specific deployment support.

## Prerequisites

### IOTA CLI Installation

Before using this tool, you need to install the IOTA CLI. The simplest way is using Homebrew:

```bash
# Install IOTA CLI using Homebrew (macOS/Linux/WSL)
brew install iotaledger/tap/iota
```

**Alternative installation methods:**

For other platforms or installation from source, see the [official IOTA installation guide](https://docs.iota.org/developer/getting-started/install-iota).

**Verify installation:**

```bash
iota --version
```

## Installation

```shell
npm install -g @twin.org/move-to-json
```

## Quick Start

```bash
# Build contracts for mainnet using environment variables (recommended)
npx move-to-json build "src/**/*.move" --load-env configs/mainnet.env --output smart-contract-deployments.json

# Deploy to mainnet using environment variables (recommended)
npx move-to-json deploy --load-env configs/mainnet.env --contracts smart-contract-deployments.json
```

## Environment Setup for Production Deployments

### Required Environment Variables

For production deployments, you need to set up environment variables containing your deployment credentials. The tool uses network-specific configuration files located in the `configs/` directory.

#### 1. Create Environment Files

Copy the environment templates for each network you plan to use:

```bash
# Copy environment templates for each network
cp configs/testnet.env.example configs/testnet.env
cp configs/devnet.env.example configs/devnet.env
cp configs/mainnet.env.example configs/mainnet.env
```

**Note:** Only copy the environment files for the networks you actually plan to deploy to. For development, you typically only need `testnet.env` and `devnet.env`.

#### 2. Generate Deployment Mnemonics

Use the wallet CLI to generate secure mnemonics and then manually update the appropriate network configuration files with the generated mnemonic.

### Environment Variable Reference

Each network has its own configuration file in the `configs/` directory with the required deployment mnemonic:

| Network | File                  | Required Variable   |
| ------- | --------------------- | ------------------- |
| Testnet | `configs/testnet.env` | `DEPLOYER_MNEMONIC` |
| Devnet  | `configs/devnet.env`  | `DEPLOYER_MNEMONIC` |
| Mainnet | `configs/mainnet.env` | `DEPLOYER_MNEMONIC` |

### Security Best Practices

#### Local Development

- Store credentials in `configs/*.env` files (never commit to git - only commit `.example` files)
- Use test mnemonics with faucet funds for testnet/devnet
- Use dedicated deployment wallets separate from personal wallets

#### CI/CD and Production

- Store credentials in GitHub Secrets or your CI/CD secrets manager
- Use hardware wallets or HSM for mainnet deployment keys
- Implement approval workflows for mainnet deployments
- Monitor wallet balances and deployment costs

### Generating Credentials

#### 1. Generate Mnemonic and Seed

```bash
# Generate a new 24-word mnemonic and save to wallet.env
npx "@twin.org/wallet-cli" mnemonic --env wallet.env
```

#### 2. Generate Addresses from Seed

```bash
# Generate 5 addresses and save to address.env
npx "@twin.org/wallet-cli" address --load-env wallet.env --seed '!SEED' --count 5 --env address.env
```

## Commands

### build

Compile Move contracts for a specific network:

```bash
# Using environment variables (recommended)
npx move-to-json build "src/**/*.move" --load-env configs/<network>.env [--output <file>]

# Using explicit network flag
npx move-to-json build "src/**/*.move" --network <network> [--output <file>]

# If installed globally
move-to-json build "src/**/*.move" --load-env configs/<network>.env [--output <file>]
```

**Options:**

- `--network <network>` - Target network (testnet/devnet/mainnet) **[Optional if using --load-env]**
- `--load-env <file>` - Load environment variables from file (must contain NETWORK variable)
- `--output <file>` - Output JSON file (default: smart-contract-deployments.json)

**What it does:**

1. Reads network from `--network` flag or `NETWORK` environment variable
2. Validates environment variables for the target network
3. Cleans build artifacts and Move.lock files
4. Compiles contracts using unified Move.toml (same bytecode for all networks)
5. Generates network-aware JSON with package IDs and base64 modules

**Key Changes:**

- **Unified Move.toml**: Uses single Move.toml file with `framework/testnet` for consistent builds
- **Network-agnostic compilation**: Same bytecode works across all networks
- **Environment-aware**: Network targeting handled by IOTA CLI environments, not Move.toml

**Example:**

```bash
# Build for testnet using environment variables (recommended)
npx move-to-json build "tests/fixtures/sources/**/*.move" --load-env configs/testnet.env --output tests/fixtures/smart-contract-deployments/smart-contract-deployments.json

# Build for mainnet using environment variables (recommended)
npx move-to-json build "src/contracts/**/*.move" --load-env configs/mainnet.env --output smart-contract-deployments.json

# Alternative: using explicit network flag
npx move-to-json build "tests/fixtures/sources/**/*.move" --network testnet --output tests/fixtures/smart-contract-deployments/smart-contract-deployments.json
```

### deploy

Deploy compiled contracts to the specified network:

```bash
# Using environment variables (recommended)
npx move-to-json deploy --load-env configs/<network>.env [--contracts <file>] [options]

# Using explicit network flag
npx move-to-json deploy --network <network> [--load-env configs/<network>.env] [options]

# If installed globally
move-to-json deploy --load-env configs/<network>.env [--contracts <file>] [options]
```

**Options:**

- `--network <network>` - Network identifier (testnet/devnet/mainnet) **[Optional if using --load-env]**
- `--load-env <file>` - Load environment variables from file (must contain NETWORK variable)
- `--contracts <file>` - Compiled modules JSON file (default: smart-contract-deployments.json)
- `--dry-run` - Simulate deployment without executing
- `--force` - Force redeployment of existing packages

**What it does:**

1. Switches IOTA CLI to target network environment
2. Loads environment variables from the file specified via `--load-env` flag
3. Validates deployment credentials are available
4. Checks wallet balance against gas requirements
5. Loads compiled contracts from JSON
6. Deploys using IOTA CLI with active network environment
7. Extracts and saves both Package ID and UpgradeCap ID
8. Updates JSON with deployed package information

**Key Changes:**

- **Environment switching**: Automatically switches IOTA CLI to target network
- **Network targeting**: Uses IOTA CLI environments instead of Move.toml configuration
- **Consistent deployment**: Same compiled bytecode deployed to all networks
- **UpgradeCap tracking**: Captures and stores UpgradeCap object ID for future package upgrades

**Prerequisites:**
Ensure IOTA CLI environments are configured:

```bash
# Check available environments
iota client envs

# Configure networks if missing
iota client new-env --alias testnet --rpc https://fullnode.testnet.iota.cafe:443
iota client new-env --alias mainnet --rpc https://api.mainnet.iota.cafe
iota client new-env --alias devnet --rpc https://api.devnet.iota.cafe
```

**Example:**

```bash
# Deploy to testnet using environment variables (recommended)
npx move-to-json deploy --load-env configs/testnet.env --contracts tests/fixtures/smart-contract-deployments/smart-contract-deployments.json

# Deploy to mainnet using environment variables (recommended)
npx move-to-json deploy --load-env configs/mainnet.env --contracts tests/fixtures/smart-contract-deployments/smart-contract-deployments.json

# Dry run (simulation)
npx move-to-json deploy --load-env configs/testnet.env --contracts tests/fixtures/smart-contract-deployments/smart-contract-deployments.json --dry-run
```

**Output:**
The deployment saves both Package ID and UpgradeCap ID:

```json
{
  "testnet": {
    "packageId": "0x...",
    "package": "base64data...",
    "deployedPackageId": "0x239ad3ea39f0910a4dc4c98161bcde948fb5ed0d7d7ae6d9a593239c43af748e",
    "upgradeCap": "0xfd6269c28e3931e41aa9d9e08ffabb8162cf1fd0baaef14094b4442e6c743edf"
  }
}
```

**Important Note on UpgradeCap:**
The UpgradeCap ID is crucial for package upgrades. Keep this secure - it's required to upgrade your deployed packages in the future.

## Unified Move.toml Approach

The tool now uses a **unified Move.toml approach** that eliminates the need for network-specific Move.toml files. This provides better consistency and reduces complexity.

### Single Move.toml Configuration

Instead of multiple `Move.toml.{network}` files, use a single `Move.toml` file:

```toml
[package]
name = "my_contract"
version = "0.0.1"
edition = "2024.beta"

[dependencies]
Iota = {
    git = "https://github.com/iotaledger/iota.git",
    subdir = "crates/iota-framework/packages/iota-framework",
    rev = "framework/testnet"
}

[addresses]
my_contract = "0x0"

[dev-dependencies]
# Optional: Override dependencies for testing
# Iota = { git = "https://github.com/iotaledger/iota.git", subdir = "crates/iota-framework/packages/iota-framework", rev = "framework/devnet", override = true }

[dev-addresses]
# Optional: Override addresses for development
# my_contract = "0x1234"
```

### Framework Version Strategy

- **Development/Testing**: Use `framework/testnet` for all networks
- **Production**: Same `framework/testnet` works for mainnet deployment
- **Consistency**: Same bytecode compiles for all target networks

### Network Targeting

Network targeting is handled through **IOTA CLI environments**, not Move.toml:

```bash
# Build once - same bytecode for all networks
iota move build

# Deploy to different networks by switching environments
iota client switch --env testnet && iota client publish
iota client switch --env mainnet && iota client publish
```

### Benefits

- ✅ **Consistent builds** across all networks
- ✅ **Reduced complexity** - no file copying
- ✅ **Industry standard** approach
- ✅ **Better maintainability** - single source of truth
- ✅ **Eliminated build conflicts** between networks

## Package Upgrades and UpgradeCap Management

When you deploy a Move package on IOTA, the network creates an **UpgradeCap** (Upgrade Capability) object that controls the ability to upgrade that package. This tool automatically captures and stores the UpgradeCap ID for future use.

### What is an UpgradeCap?

The UpgradeCap is a special object that:

- **Controls package upgrades**: Only the holder can upgrade the package
- **Is created once**: Generated during initial package deployment
- **Must be preserved**: Lost UpgradeCap = no future upgrades possible
- **Is network-specific**: Each network deployment gets its own UpgradeCap

### UpgradeCap Storage

The tool stores UpgradeCap IDs in the smart-contract-deployments.json file:

```json
{
  "testnet": {
    "packageId": "0xabc123...",
    "package": "base64data...",
    "deployedPackageId": "0x239ad3ea39f0910a4dc4c98161bcde948fb5ed0d7d7ae6d9a593239c43af748e",
    "upgradeCap": "0xfd6269c28e3931e41aa9d9e08ffabb8162cf1fd0baaef14094b4442e6c743edf"
  }
}
```

### Using UpgradeCap for Package Upgrades

To upgrade a deployed package, you'll need the UpgradeCap ID:

```bash
# Example upgrade command (using IOTA CLI)
iota client call --package 0x2 --module package --function upgrade \
  --args 0xfd6269c28e3931e41aa9d9e08ffabb8162cf1fd0baaef14094b4442e6c743edf \
  --gas-budget 50000000
```
