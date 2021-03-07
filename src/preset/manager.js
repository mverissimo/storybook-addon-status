import { addons, types } from '@storybook/addons';

import { ADDON_ID, TOOL_ID } from '../constants';
import { Badge } from '../components';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Storybook Component Status',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Badge,
  });
});
