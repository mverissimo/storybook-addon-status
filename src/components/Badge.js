import React from 'react';
import { useStorybookApi } from '@storybook/api';
import { Badge as BadgeBase } from '@storybook/components';
import { styled, css } from '@storybook/theming';

import { TOOL_ID } from '../constants';
import { merge } from '../utils/merge';

const BADGES_MAP = {
  beta: {
    title: 'beta',
    color: '#0965DF',
    background: '#0965DC1A',
  },
  stable: {
    title: 'stable',
    color: '#0bbd00',
    background: '#dcffd6',
  },
  review: {
    title: 'in review',
    color: '#BD4700',
    background: '#FFF2D6',
  },
  deprecated: {
    title: 'deprecated',
    color: '#BD0000',
    background: '#FFD6D6',
  },
};

let baseStyles = ({ badges, status }) => {
  const COLORS = merge(BADGES_MAP, badges);

  return css`
    label: badge;

    color: ${COLORS[status].color};
    text-transform: uppercase;

    user-select: none;
    background: ${COLORS[status].background};
  `;
};

let Badge = styled(BadgeBase)(baseStyles);

function Status() {
  let api = useStorybookApi();
  let story = api.getCurrentStoryData();

  if (story) {
    let { status, badges } = story.parameters;

    if (status) {
      return (
        <Badge key={TOOL_ID} badges={badges} status={status}>
          {merge(BADGES_MAP, badges)[status].title}
        </Badge>
      );
    }
  }

  return null;
}

export default Status;
