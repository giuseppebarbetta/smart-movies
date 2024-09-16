import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 2;
  width: 50%;

  h1 {
    font-size: 53px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 350px;
    border-radius: 30px;
    box-shadow: 0px 15px 18px -5px rgba(0, 0, 0, 0.8);
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`
