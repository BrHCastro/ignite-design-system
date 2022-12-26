import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@system-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor repellat, corporis dolorem beatae voluptatum sapiente ratione in, tempore dolorum quisquam, ad recusandae odit? Voluptas, sint nihil? Eveniet, illo ea!',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'This is a strong tag',
    as: 'strong',
  },
}
