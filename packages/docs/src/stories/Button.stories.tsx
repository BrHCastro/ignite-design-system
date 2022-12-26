import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@system-ui/react'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Submit',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
