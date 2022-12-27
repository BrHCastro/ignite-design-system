import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@system-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://source.unsplash.com/random/300×300/?profile',
    alt: 'random avatar profiles',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
