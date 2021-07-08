import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'cps-theme/src/button.scss';
import { Button } from 'cps';

export default {
  title: 'Mobile/MyButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
