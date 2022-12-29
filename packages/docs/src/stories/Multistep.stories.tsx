import type { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@syst-ui/react'

export default {
  title: 'Forms/Multi Step',
  component: Multistep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Default: StoryObj<MultistepProps> = {}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
  },
}
