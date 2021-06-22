import styled from "styled-components";

export const HamburgerWrapper = styled.div`
  z-index: 1;
  width: 50px;
  height: 60px;
`;

export const LanguagesWrapper = styled.div`
  margin-top: 8rem;
  font-size: 1.25rem;

  > a {
    margin-right: 3rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const HamburgerIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 50px;
  height: 60px;
  padding: 0.5rem;
  border-radius: 0 0.12em 0.12em 0;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 4px;
    border-radius: 8px;
    background: black;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after,
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background: inherit;
      transition: all 0.4s ease;
    }
    &:before {
      top: 10px;
    }
  }
`;

export const HamburgerLinksWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent;
  display: flex;
  justify-content: center;

  > div {
    width: 100vw;
    height: calc(100vh + 100px);
    color: black;
    background: rgba(255, 255, 255, 1);
    transition: all 0.7s ease;
    flex: none;
    opacity: 0;
    backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      position: relative;
      text-align: center;
      max-width: 90vw;
      max-height: 100vh;
      opacity: 0;
      transition: all 0.4s ease;
      overflow-y: auto;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(1);
    }
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0 1em;
  margin: 0;
  display: block;
  overflow: hidden;
  max-height: 100vh;

  > li {
    padding: 0;
    margin: 1em;
    font-size: 24px;
    display: block;

    a > {
      position: relative;
      display: inline;
      cursor: pointer;
      transition: color 0.4s ease;
    }
  }
`;

export const HamburgerCheckbox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 60px;
  height: 60px;
  opacity: 0;

  &:checked + ${HamburgerIconWrapper} {
    > div {
      transform: rotate(135deg);

      &:before,
      &:after {
        top: 0;
        transform: rotate(90deg);
      }
      &:before {
        opacity: 0;
      }
    }

    ~ ${HamburgerLinksWrapper} {
      pointer-events: auto;
      visibility: visible;

      > div {
        opacity: 1;
        transition-duration: 0.75s;

        > div {
          opacity: 1;
          transform: scale(1);
          transition: all 0.75s ease 0.4s;
        }
      }
    }
  }
`;
