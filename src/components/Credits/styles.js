import styled from 'styled-components'

export const Title = styled.h4`
  font-size: 28px;
  color: #efefef;
  font-weight: 700;
  margin: 17px 0;
`

export const Container = styled.div`
  display: flex;
  margin: 26px 0;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 8px 0;
    color: #efefef;
    display: flex;
    flex-wrap: wrap;
    max-width: 130px;
    padding-left: 2px;
  }

  img {
    height: 200px;
    width: 135px;
    max-width: 153px;
    border-radius: 5px;
    box-shadow: rgb(248, 248, 255, 0.5) 0px 1px 8px 0px;
  }
`
