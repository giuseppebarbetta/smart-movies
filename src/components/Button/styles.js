import styled from 'styled-components'

export const ButtonStyles = styled.button`
  border: 3px solid ${(props) => (props.model === 1 ? '#c2f320' : '#ffffff')};
  background-color: ${(props) =>
    props.model === 1 ? '#c2f320' : 'transparent'};
  opacity: ${(props) => (props.model === 1 ? '85%' : '100%')};
  color: ${(props) => (props.model === 1 ? '#000000' : '#ffffff')};
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 500;

  ${(props) =>
    props.model === 1 &&
    `
      box-shadow: 0px 0px 15px 2px #c2f320;
    `}

  transform: scale(1);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.model === 1 ? 'scale(1.1)' : 'scale(1)')};
    opacity: 100%;
    border: 3px solid ${(props) => (props.model === 1 ? '#c2f320' : '#000000')};
    background-color: ${(props) => props.model !== 1 && '#000000'};
    color: ${(props) => props.model !== 1 && '#c2f320'};
  }
`
