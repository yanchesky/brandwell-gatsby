import styled from "styled-components";

export const HamburgerWrapper = styled.div`
  z-index: 1;
  width: 40px;
  height: 40px;
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
  width: 40px;
  height: 40px;
  padding: 0.5em;
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
    height: 2px;
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
      height: 2px;
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
  width: 100%;
  height: 100%;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    height: 100%;
    color: black;
    background: rgba(255, 255, 255, 0.97);
    background: red;
    transition: all 0.4s ease;
    flex: none;
    transform: translateX(-100vw);
    backface-visibility: hidden;
    overflow: hidden;

    > div {
      position: relative;
      text-align: center;
      max-height: 100vh;
      opacity: 0;
      transition: opacity 0.4s ease;
      overflow-y: auto;
      margin-top: 4rem;
    }
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0 1em;
  margin: 0;
  display: block;
  max-height: 100vh;
  width: 100%;

  > li {
    padding: 0;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    font-size: 24px;
    display: block;
    border-bottom: 1px solid black;

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
      transform: rotate(135deg) scale(1.2);

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
        transform: translateX(0);
        transition-duration: 0.5s;

        > div {
          opacity: 1;
          transition: opacity 0.6s ease 0.3s;
        }
      }
    }
  }
`;
