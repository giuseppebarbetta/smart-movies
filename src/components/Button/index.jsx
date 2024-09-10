import { ButtonStyles } from './styles'

function Button({ children, model }) {
  return <ButtonStyles model={model}>{children}</ButtonStyles>
}

export default Button
