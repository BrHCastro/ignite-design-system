import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@system-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'This is a `H1` Element',
    as: 'h1',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será `h2`. Porém, podemos alterar isto com a propriedade `as`',
      },
    },
  },
}
