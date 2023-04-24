# Restrict by Origin

Your Tezos RPC is uniquely identified by its API key (starting with `ak`).

The API key appears in the URL:

Therefore, anyone doing queries to this URL will consume compute units on your account.

It is possible to restrict access to your Tezos RPC endpoint to a known web app domain (e.g. https://mydapp.example.com). This is called setting the CORS Policy. CORS stands for "Cross-Origin Resource Sharing".

Requests from any other domain get a CSRF error. Therefore, your Tezos RPC Endpoint will only serve requests from your Web App (as identified per its Fully Qualified Domain Name).

It is currently not possible to restrict per IP address. We do not offer HTTP Authentication either.

## Set CORS Allowed Origin

From your RPC endpoint page, click the "Modify" button on the relevant network (Mainnet or Ghostnet).

Then in the "CORS Allowed Domains" field, enter your domains (such as `https://my-tezos-dapp.xyz`). Several domains must be separated by ','

By default, any domain is allowed. To allow any domain, enter "*".

