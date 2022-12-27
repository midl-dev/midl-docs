# Tezos RPC Service

Tezos RPC Service unleashes your creativity on Tezos. Focus on your Web 3 application, and leave running the nodes to us.

Our full nodes are operated on top of a cloud-based platform. This guarantees highly redundant and reliable infrastructure with 24/7 monitoring.

We are multi-cloud and multi-region. Our geographical load-balancing directs you to the point-of-presence closest to you, while ensuring reliability.

All our plans include complimentary testnet ([Ghostnet](https://teztnets.xyz/ghostnet)) endpoints.

## Getting Started

### Create an Account

To sign up for an account on the MIDL.dev website, enter your email address and password, and click Sign Up. You may also use your Google account to register.

To activate your account, verify your email address by clicking the link sent to your inbox.

### Create a RPC

Click on "Create Tezos RPC" and pick a name.

### Connect to your Tezos RPC

After creating your RPC, you have access to your RPC URL from the dashboard, for both Tezos Mainnet and Tezos Ghostnet (the permanent testnet of Tezos).

The URL will look like this: `https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/`

#### With CURL

The following code queries the level of the most recent Tezos mainnet block:

```bash
$ curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head/header | jq .level
```

To go further, refer to [Tezos RPC Documentation](https://tezos.gitlab.io/developer/rpc.html).

#### With Taquito

The following Typescript code grabs the balance of one mainnet address:

```typescript
import { TezosToolkit } from '@taquito/taquito';
const Tezos = new TezosToolkit('https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8');

Tezos.tz
  .getBalance('tz1MidLyXXvKWMmbRvKKeusDtP95NDJ5gAUx')
  .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
  .catch((error) => console.log(JSON.stringify(error)));
```

To go further, please refer to [Taquito documentation](https://tezostaquito.io/).

#### With pytezos

The following Python code grabs the balance of one mainnet address:
```python
from pytezos import pytezos

midl_rpc = "https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8"
account = pytezos.using(midl_rpc).account("tz1MidLyXXvKWMmbRvKKeusDtP95NDJ5gAUx")
print(str(int(account["balance"]) / 1000000) + " ꜩ")
```

To go further, please refer to the [Pytezos documentation](https://pytezos.org).
