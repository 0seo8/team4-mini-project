import styled, { css } from 'styled-components'

const sizes = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${(props) => (props.height ? props.height : '6.2rem')};
      width: ${(props) => (props.width ? props.width : '100%')};
      font-size: 1.4rem;
      line-height: 2.2rem;
      border-radius: 1.2rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 16rem;
      height: 3.7rem;
      font-size: 1.3rem;
      line-height: 2.2rem;
      border-radius: 0.8rem;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 8.3rem;
      height: 2.5rem;
      font-size: 1.3rem;
      border-radius: 0.4rem;
    `}
  ${(props) =>
    props.size === 'flat' &&
    css`
      width: 6rem;
      height: 6rem;
      font-size: 1.3rem;
      opacity: 0.8;
      border-radius: 1.2rem;
    `}
    ${(props) =>
    props.size === 'radio' &&
    css`
      display: inline-block;
      width: 100%;
      height: 3.3rem;
      border-radius: 0.4rem;
      font-size: ${(props) => (props.Fontsize ? props.Fontsize : '1.4rem')};
      background-color: ${(props) =>
        props.active ? 'rgba(19, 189, 126, 0.1)' : '#fff'};
      color: ${(props) => (props.active ? '#63e6be' : '#BABABC')};
      border: 1px solid #e4edf2;
    `}
`

export const Button = styled.button`
  margin-bottom: 0.5rem;
  outline: none;
  border: none;
  color: ${(props) => (props.disabled ? '#A9AFB9' : '#fff')};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.palette.disabled
      : props.theme.palette.baseColor};
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.9;
  }
  ${sizes}
`
