import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const StyledMUIButton = styled(Button)(() => ({}))

const StyledButton = ({ children, ...props }) => {
  return <StyledMUIButton {...props}>{children}</StyledMUIButton>
}

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
}

export default StyledButton
