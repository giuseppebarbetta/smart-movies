import styled from 'styled-components'

export const ButtonStyles = styled.button`
  border: 3px solid
    ${(props) => (props.model === 'primary' ? '#c2f320' : '#ffffff')};
  background-color: ${(props) =>
    props.model === 'primary' ? '#c2f320' : 'transparent'};
  opacity: ${(props) => (props.model === 'primary' ? '85%' : '100%')};
  color: ${(props) => (props.model === 'primary' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 500;
  margin-top: 26px;

  ${(props) =>
    props.model === 'primary' &&
    `
      box-shadow: 0px 0px 15px 2px #c2f320;
    `}

  transform: scale(1);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.model === 'primary' ? 'scale(1.1)' : 'scale(1)'};
    opacity: 100%;
    border: 3px solid
      ${(props) => (props.model === 'primary' ? '#c2f320' : '#000000')};
    background-color: ${(props) => props.model !== 'primary' && '#000000'};
    color: ${(props) => props.model !== 'primary' && '#c2f320'};
  }
`
