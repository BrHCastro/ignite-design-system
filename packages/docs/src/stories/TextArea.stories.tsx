import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@syst-ui/react'

export default {
  title: 'Forms/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Message</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your message',
  },
}

export const Desabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
