# Tezos Endpoint Services

Tezos Endpoint Services unleash your creativity on Tezos. Focus on your Web 3 application, we run the infrastructure for you.

We operate full nodes and an indexing service powered by [TzKT](https://tzkt.io).

## The MIDL.dev Platform

Our nodes are operated on top of a cloud-based platform. This guarantees highly redundant and reliable infrastructure with 24/7 monitoring.

We are multi-cloud and multi-region. Our geographical load-balancing directs you to the point-of-presence closest to you, while ensuring reliability.

Our current points of presence are:

* North America (Digitalocean Toronto)
* Europe (Digitalocean Amsterdam)

All our plans include complimentary testnet ([Ghostnet](https://teztnets.xyz/ghostnet)) endpoints.

## Archive nodes

We support **archive queries**. Our innovative load balancing system routes queries between:

* fast "rolling nodes" containing only recent data, optimized for speed,
* "archive nodes" containing all data since Tezos genesis, ideal for running indexers.

It is all transparent to you: any RPC endpoint on our platform supports archive queries.

Some queries may be priced differently. See [Pricing](tezos-endpoints-pricing).

## Indexer Endpoints powered by TzKT

Our indexer endpoint offer additional features not available with the regular Tezos RPC Endpoint:

* query all tokens owned by an address,
* look up an operation by hash,
* query operation history for an account,
* and many more.

For more information, please see the [TzKT section of the Tezos wiki](https://wiki.tezos.com/build/blockchain-indexers/).
