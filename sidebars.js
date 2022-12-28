/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      collapsed: false,
      label: 'Tezos RPC',
      items: ['tezos-rpc', 'tezos-rpc-getting-started',
        'tezos-rpc-restrict-by-origin', 'tezos-rpc-billing'],
    },
    'tezos-baking',
  ],
};

module.exports = sidebars;
