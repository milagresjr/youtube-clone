import { styled } from "styled-components";

export const Container = styled.div`
  
  grid-area: SB;
  width: 320px;
  height: 100vh;
  position: fixed;
  padding: 9px 10px;
  overflow-y: hidden;
  background: var(--color-white);
  /* background: red; */
  z-index: 2;
  margin-top: 70px;

  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-white);
  }

  &:hover {
    overflow-y: scroll;
  }

  @media (max-width: 1500px) {
    display: none;
  }

`;