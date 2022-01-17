import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chip, ChipProps } from "../../src/chip";

export default {
    title: 'Display/Chip',
    component: Chip
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args: ChipProps) => <Chip {...args} />;

export const BasicLarge = Template.bind({});
BasicLarge.args = {
    color: 'primary',
    text: 'Large Chip',
    size: 'lg',
    icon: 'bi bi-patch-question-fill',
}

export const BasicMedium = Template.bind({});
BasicMedium.args = {
    color: 'secondary',
    text: 'Medium Chip',
    size: 'md',
    icon: 'bi bi-patch-question-fill',
}

export const BasicSmall = Template.bind({});
BasicSmall.args = {
    color: 'info',
    text: 'Small Chip',
    size: 'sm',
    icon: 'bi bi-patch-question-fill',
}