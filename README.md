# Storybook Addon Status

Storybook Status Addon show the component status in your story.

[Live preview](https://mverissimo.github.io/storybook-addon-status/)

# Installation

```bash
yarn add --dev @mverissimoo/storybook-addon-status
```

# Configuration

Add storybook-addon-status to your list of addons:

```js
// .storybook/main.js

module.exports = {
  addons: ['@mverissimoo/storybook-addon-status/preset'],
};
```

# Usage

Just add the following param in your storie:

```jsx
export default {
  title: 'Components/Button',
  parameters: {
    status: 'stable', // beta| deprecated | review | stable
  },
};
```

# Custom status badge

Just add a `status` object in your `parameters` eg:

```js
// .storybbok/preview.js

export const parameters = {
  badges: {
    custom: {
      title: 'some badge',
      color: '#FFFFFF',
      background: '#000000',
    },
  },
};
```
