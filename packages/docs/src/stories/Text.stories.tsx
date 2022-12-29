import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@syst-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor repellat, corporis dolorem beatae voluptatum sapiente ratione in, tempore dolorum quisquam, ad recusandae odit? Voluptas, sint nihil? Eveniet, illo ea!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'This is a strong tag',
    as: 'strong',
  },
}
