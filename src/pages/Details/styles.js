import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1);
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.62);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;

    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  margin-top: -100px;
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 44px;
    font-weight: 700;
    color: #efefef;
  }

  p {
    font-weight: 700;
    color: #efefef;
    margin: 17px 0;
    flex-wrap: wrap;
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    margin: 17px 0;
  }

  h4 {
    color: #efefef;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 0;
  }

  iframe {
    border: none;
  }
`
