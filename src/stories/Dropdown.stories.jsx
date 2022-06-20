import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Dropdown {...args} />;


export const Dropdowns = Template.bind({});
