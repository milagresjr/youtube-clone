import { styled } from "styled-components";

export const Container = styled.div`
  
  /* background: var(--color-white);   */
  /* background: #212121; */
  /* width: 100vw; */
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 70px auto;
  grid-template-areas: 
  'HD HD HD'
  'SB MA MA';
  /* position: relative; */


  height: 100vh;

  @media (max-width: 1500px) {
    grid-template-columns: 100px auto;
  }

  @media (max-width: 700px) {
    grid-template-columns: 0px auto;
    }
  
`;