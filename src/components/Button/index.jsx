import { ButtonStyles } from './styles'

function Button({ children, model, ...props }) {
  return (
    <ButtonStyles {...props} model={model}>
      {children}
    </ButtonStyles>
  )
}

export default Button
