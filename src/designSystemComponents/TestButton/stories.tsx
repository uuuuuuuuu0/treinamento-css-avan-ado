import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TestButton from './index';

export default {
    title: 'TestButton',
    component: TestButton
} as ComponentMeta<typeof TestButton>;

export const Primary: ComponentStory<typeof TestButton> = (args) => (
    <TestButton {...args}>Componente</TestButton>
);

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/n13mFMi8T7E1Q76rafLmZu/Design-System?node-id=141%3A4545&t=c4nFO4fZhYL7182F-1'
    }
};
