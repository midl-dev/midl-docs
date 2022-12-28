# Tezos Baking Service

The Tezos Baking Service allows you to bake your Tez while keeping custody of your assets.

Operations are signed either:

* with a Ledger and Remote Signer (we can ship!)
* with a Cloud KMS Remote Signer.

[Contact us](mailto:hello@midl.dev) to start baking!

## Initial baker setup

Prerequisites for secure baking are two Ledger Nano S plus:

* one that is active all the time, signing baking and endorsing operations
* one used for occasionally transfering funds and voting for protocol amendments, otherwise remaining offline

These Ledgers should be used exclusively for Tezos baking. Do not install other apps, and transfer any other cryptocurrency onto them.

### Setting up Ledgers

Upgrade both Ledgers with the most recent firmware available.

Initialize the first Ledger with a new key. Write down the secret seed as prescribed by the documentation. Do not take a picture of it, keep it offline.

On the first Ledger, install the tezos baker app. Do not install any other app.

Initialize the second Ledger with the secret seed that you wrote down from the first Ledger.

The second Ledger is now a clone of the first. It contains the same keys.

On the second Ledger, install the tezos app. Do not install any other app.

Label Ledgers, ideally with printed labels ("My Tezos Baker Signer" / "My Tezos Baker Offline")

NOTE: you may set up the second Ledger later, as it is not necessary to kick off the baking operations

### Get the Ledger mnemonic

To follow the instructions below, you will need to install the Tezos Command Line Interface. [Follow instructions from Tezos documentation](https://tezos.gitlab.io/introduction/howtoget.html).

Note that it is not needed to synchronize the blockchain.

With the Ledger unlocked and the Tezos App open, issue the command `octez-client list connected ledgers`.

The Ledger URL including the four-animal-word mnemonic will be displayed, together with commands inviting you to import the key.

There are several cryptographic schemes to choose from. We will be using `ed25519`.

### Choose a derivation path

Ledger has the concept of derivation path - instead of just one address, the device stores multiple addresses. They are related to them by a derivation path, but they are undistinguishable by looking at the public key.

For example, the root path is `/0'/0'`, and the first child path is `/0'/1'`.

It is considered good practice to always use a derived path instead of the root path.

Import the key into your client:

```
octez-client import secret key ledger_root "ledger://<mnemonic>/ed25519/0'/1'"
```

Then read the public key hash associated with this Leger key and path:

```
octez-client list known addresses
```

Write down the Ledger URL and the baker's public key hash as they are necessary to spin up the cloud baker.

### Test incoming and outgoing transfers

First, it is recommended to send a small amount of tez in the Ledger address, then out again, to verify that the funds are indeed accessible.

Transfer tez (from an exchange or any other source) to the address discovered above.

Then, with CLI, do an outbound transfer to an outbound address that you control (such as an address for incoming transfer on an exchange). For example, to transfer 1 tez, issue the following command:

```
octez-client --endpoint https://mainnet-tezos.giganode.io transfer 1 from ledger_root to <outbound address>
```

Since this is an on-chain operation, we pass the parameters `--endpoint https://rpc.tzbeta.net` to connect to a publicly accessible Tezos node.

The Ledger should prompt you to confirm. Pay close attention to what is displayed on the Ledger screen, verify that it does what you want it to do.

### Transfer funds

After verifying that you are able to transfer in and out of your baking address, transfer enough funds (at least 6000 tez) to start baking.

### Setup Ledger to bake

On the Ledger used for baking, launch the baking app and connect it to your computer after disconnecting the other Ledger used for transfers.

Then issue the following:

```
octez-signer setup ledger to bake for <ledger_url> --main-chain-id NetXdQprcVkpaWU
```

The Ledger should prompt you to confirm. It will display the baker address and the chain ID. Verify that it corresponds to your baker address.

Note: `NetXdQprcVkpaWU` is the chain id for Tezos mainnet. For a testnet deployment, change it to the relevant chain-id.

### Register as delegate

To start baking, you must sign an on-chain operation indicating the network that you register to get baking and endorsing slots.

When you register, there is a grace period of two full cycles. Then, you get assigned baking and endorsing slots for five cycles in the future. It means that there is approximately a 21 day gap between the moment you register as delegate and your first on-chain validation operation. Hence it is required to perform this operation well in advance of the planned launch date of the baker.


With the Ledger used for baking still connected, issue the following operation:

```
octez-client --endpoint https://rpc.tzbeta.net register key <baking address> as delegate
```

Again, this is an on-chain operation, so you either need to connect to a public node (like above) or have a fully synced node running locally.

The Ledger should prompt you to confirm. Pay close attention to what is displayed on the Ledger screen, verify that it does what you want it to do.

Verify on an explorer such as TzStats that your address is indeed registered as a baker.

[See Tezos official documentation for more details](https://tezos.gitlab.io/introduction/howtorun.html#register-and-check-your-rights)

## Remote Signer Initial Setup

If you just received a MIDL.dev Remote Signer, follow the instructions below to set it up.

### Bill of materials

* one Raspberry Pi 4 with a Geekworm hat
* two batteries
* one USB-to-micro-USB adapter
* one USB-to-USB-C cable
* one Ethernet cable

Not included:

* USB power adapter of at least 3A (3,000 mA) supply

### Assembly

Insert the batteries in the Pi Hat. Make sure to respect polarity.

Plug the USB-to-micro-USB adapter to a USB 3 port. These are blue in color. **This is important!** The Ledger will be connected to the adapter, and it must be connected to a USB 3 port.

Plug the Ethernet cable to an Internet-connected device.

Plug the USB-to-USB C cable to the USB hat. **Important!** Do not connect the USB-C port to the Raspberry Pi directly, otherwise the battery will not charge.

On the other end, connect the USB cable to the power adapter.

Check that the battery status LEDs indicate that the device is either charging or fully charged. In steady state, the device should be indicating a full charge. If that is not the case, your adapter may not be powerful enough.

### Connect Ledger

Connect the Baking Ledger Nano S Plus to the USB-C end of the adapter. Unlock it and launch the baking app.

### Test alerts

Once the signer is connected to the cloud backend, you may test that the alerting system is working properly.

1. Unplug remote signer power connection.
1. Unplug Ledger from remote signer.

You should receive an email alert.
