# Billing

Our billing unit is the **compute unit**. All our plans offer free compute units.

To pick the best suited to your needs, visit our [pricing page](https://midl.dev/tezos-rpc/).

## Compute Units


Our innovative **load balancing solution** combines Archive and Rolling Octez nodes at every location:

* any request to a **specific block** identified by block hash or block number goes to the Archive Nodes and costs **2 compute units**
* any other request goes to the Rolling Nodes and costs **1 compute unit**.
* testnet queries are always free of charge.

Examples:

```bash
# HEAD block query costs one compute unit
curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head

# Query version costs one compute unit
curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/version

# Archive query (by level) costs 2 compute units
curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/999999/header

# Archive query (by block hash) costs 2 compute units
curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/BLh993Nn3BJPzFcnzuwW7ut4YxKCbFfBuZBm85bG7xRZL8jDXhb

# Ghostnet queries cost 0 compute units
curl https://ghostnet.tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head/header
```
