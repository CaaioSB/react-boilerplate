import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const StyledMUIButton = styled(Button)(() => ({}))

const StyledButton = ({ children, ...props }) => {
  return <StyledMUIButton {...props}>{children}</StyledMUIButton>
}

export default StyledButton
