import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.71);
`

export const Container = styled.div`
  background-color: #000000;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  padding: 53px;

  max-width: 1200px;

  button {
    background-color: #f30f02;
    height: 17px;
    width: 17px;
    color: #efefef;
    font-weight: 700;

    border: none;
    border-radius: 5px;
    cursor: pointer;

    position: absolute;
    top: 0;
    right: 0;

    margin-top: 17px;
    margin-right: 17px;

    &:hover {
      background-color: rgba(620, 10, 10, 0.5);
    }
  }

  iframe {
    border: none;
  }
`
