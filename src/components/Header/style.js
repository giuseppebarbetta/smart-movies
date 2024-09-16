import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ changeBackground }) =>
    changeBackground ? '#EFEFEF' : 'transparent'};

  width: 100vw;
  min-height: 80px;
  padding: 10px 35px;
  z-index: 3;
  position: fixed;
  top: 0;

  transition: background-color 0.5s ease-in-out;
`

export const Img = styled.img`
  display: flex;
  height: 44px;
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 35px;
`

export const Li = styled.li`
  font-size: 22px;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ changeBackground }) =>
      changeBackground ? '#000000' : '#EFEFEF'};
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #c2f320;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);

    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
