// https://reffect.co.jp/html/storybook/

// ButtonComponents

import Button from "./Button";

// export default {
//   title: "Common/Button",
//   component: Button,
// };

export default {
  title: "Common/Test",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "default", "denger"],
      control: { type: "select" },
      // control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
      // control: { type: "radio" },
    },
  },
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;

// Args
// export const Default = () => <Button>Default</Button>
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "PrimarySmall",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args, // PrimarySmallの値を利用できる
  children: "PrimaryLarge",
  size: "lg",
};
