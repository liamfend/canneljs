import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'cps-theme';
import { Button } from 'cps/components/button/index';

export default {
  title: 'Mobile/MyButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'sdfsaf',
};
