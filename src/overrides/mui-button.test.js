import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Button } from '@mui/material'
import { PropTypes } from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import colors from 'theme/colors'
import theme from 'theme'

function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

describe('render a contained styled button', () => {
  it('should render button', () => {
    render(
      <Button variant='contained' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const containedButton = screen.getByTestId('button')

    expect(containedButton).toHaveClass('MuiButton-contained')
    expect(containedButton).toHaveStyle(`background-color: ${colors.blue[500]}`)
    expect(containedButton).toHaveStyle('border: 0px')
  })

  it('should render a hovered button', () => {
    render(
      <Button variant='contained' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const containedHoveredButton = screen.getByTestId('button')
    fireEvent.mouseEnter(containedHoveredButton)

    // TODO: Fix hover button style does not working on test
    // await waitFor(() => {
    //   expect(containedHoveredButton).toHaveStyle(`background-color: ${color.blue[700]}`)
    // })

    expect(containedHoveredButton).toHaveClass('MuiButton-contained')
    expect(containedHoveredButton).toHaveStyle('border: 0px')
  })

  it('should render a outlined button', async () => {
    render(
      <Button variant='outlined' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const outlinedButton = screen.getByTestId('button')

    expect(outlinedButton).toHaveClass('MuiButton-outlined')
    expect(outlinedButton).toHaveStyle(`background-color: ${colors.root[0]}`)
    expect(outlinedButton).toHaveStyle(`border-color: ${colors.blue[500]}`)
    expect(outlinedButton).toHaveStyle(`color: ${colors.blue[500]}`)

    fireEvent.mouseEnter(outlinedButton)
    await waitFor(() => {
      expect(outlinedButton).toHaveStyle(`background-color: ${colors.root[0]}`)
    })
  })

  it('should render a blank button', () => {
    render(
      <Button variant='blank' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const blankButton = screen.getByTestId('button')

    expect(blankButton).toHaveClass('MuiButton-blank')
    expect(blankButton).toHaveStyle(`background-color: ${colors.root[0]}`)
    expect(blankButton).toHaveStyle(`color: ${colors.blue[500]}`)
    expect(blankButton).toHaveStyle('border: none')
  })

  it('should render a inverse-outlined button', () => {
    render(
      <Button variant='inverse-outlined' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const inversedOutlinedButton = screen.getByTestId('button')

    expect(inversedOutlinedButton).toHaveClass('MuiButton-inverse-outlined')
    expect(inversedOutlinedButton).toHaveStyle('background-color: transparent')
    expect(inversedOutlinedButton).toHaveStyle(`border-color: ${colors.root[0]}`)
    expect(inversedOutlinedButton).toHaveStyle(`color: ${colors.root[0]}`)

    // TODO: Fix hover button style does not working on test
    // fireEvent.mouseEnter(inversedOutlinedButton)
    // await waitFor(() => {
    //   expect(inversedOutlinedButton).toHaveStyle(`background-color: ${colors.smoke[700]}`)
    // })
  })

  it('should render a inversed-blank button', () => {
    render(
      <Button variant='inversed-blank' data-testid='button'>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const inversedBlankButton = screen.getByTestId('button')

    expect(inversedBlankButton).toHaveClass('MuiButton-inversed-blank')
    expect(inversedBlankButton).toHaveStyle('background-color: transparent')
    expect(inversedBlankButton).toHaveStyle('border: 0px')

    // TODO: Fix button text color returning "+ color: ButtonText;"
    // expect(inversedBlankButton).toHaveStyle(`color: ${colors.root[0]}`)
  })

  it('should render a disabled button', () => {
    render(
      <Button variant='contained' data-testid='button' disabled>
        Botão
      </Button>,
      { wrapper: Providers }
    )

    const disabledButton = screen.getByTestId('button')

    expect(disabledButton).toBeDisabled()
    expect(disabledButton).toHaveStyle(`background-color: ${colors.smoke[500]}`)
    expect(disabledButton).toHaveStyle(`color: ${colors.root[0]}`)
  })
})

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
