import { styled } from "styled-components";

export const Container = styled.div`
   grid-area: SB;
   width: 100px;
   height: 100vh;
   /* background: red;  */
   background: var(--color-white);
   display: none;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   padding: 12px 0;
   position: fixed;
   margin-top: 70px;
   z-index: 2;
   
   @media (max-width: 1500px) {
        display: flex;
    }

   @media (max-width: 700px) {
        display: none;
    }
`;
export const ButtonMenu  = styled.div`
    /* background: blue; */
    width: 90%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    cursor: pointer;

    & > svg {
        width: 28px;
        height: 28px;
        flex-shrink: 0;
    }
    & > span {
        margin-top: 10px;
        font-size: 10pt;
    }

    &:hover, &.active {
        background: #f0f0f0;
    }
    margin-bottom: 5px;

`;