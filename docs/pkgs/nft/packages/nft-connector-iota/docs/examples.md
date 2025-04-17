# @twin.org/nft-connector-iota - Examples

## Note

The `start()` method must be called after instantiating the connector and before using any storage methods. This method will:

- Check for an existing package ID in the component state
- If found, verify the package exists on the network
- If not found or verification fails, deploy a new package
- Initialize the connector for use

## Installing the IOTA CLI Locally

This project uses the "iota" command-line tool to compile and manage its Move contracts. To run "iota move build" or related commands on your own machine, you'll need to install the correct IOTA CLI binary for your operating system and processor architecture.

1. Visit the IOTA GitHub Releases Page  
   [IOTA Releases](https://github.com/iotaledger/iota/releases)  
   Here, you'll see multiple release artifacts (e.g., Linux x86_64, macOS arm64, Windows x86_64, etc.).

2. Download the Correct Release  
   • Linux (x86_64): iota-vX.Y.Z-beta-linux-x86_64.tgz  
   • macOS (arm64 or x86_64): iota-vX.Y.Z-beta-macos-arm64.tgz (or macos-x86_64)  
   • Windows (x86_64): iota-vX.Y.Z-beta-windows-x86_64.tgz

3. Extract the Archive  
   On Linux/macOS (adjust the file name as needed):  
   » tar xzf iota-vX.Y.Z-beta-linux-x86_64.tgz  
   This should produce an executable file named iota (or iota.exe on Windows).

4. Mark as Executable (Linux/macOS)  
   » chmod +x iota

5. (Optional) Move It to a System-Wide Location  
   » sudo mv iota /usr/local/bin/iota  
   This allows you to run the iota command from any directory.

6. Confirm Installation  
   » iota --version

7. Windows Users  
   • Extract the .tgz using a tool such as 7zip.  
   • The extracted file will typically be named iota.exe.  
   • You can either run it from the same folder or move it somewhere in your system's PATH.

Once installed, you can use the iota command to build or manage Move contracts locally.

---

## Example GitHub Actions Set Up

In this repository's GitHub Actions, we install the Linux x86_64 binary because the GitHub runner is Ubuntu-based:

```yaml
name: Download & Install IOTA CLI
run: |
  wget https://github.com/iotaledger/iota/releases/download/v0.12.0-rc/iota-v0.12.0-rc-linux-x86_64.tgz -O iota-cli.tgz
  tar xzf iota-cli.tgz
  chmod +x iota
  sudo mv iota /usr/local/bin/iota
  iota --version
```

Locally, however, you should choose the appropriate binary for your OS (Windows/Mac/Linux) and follow similar steps to extract and run the CLI.
