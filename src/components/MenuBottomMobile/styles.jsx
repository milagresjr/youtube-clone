import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    /* background: green; */
    background: var(--color-white);
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-inline: 30px;
    z-index: 1;

    @media (max-width: 700px) {
        display: flex;
    }

`;
export const ButtonMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > svg {
        width: 24px;
        height: 24px;
    }
    & > span {
        
        @media (max-width: 500px) {
            font-size: 10pt;
        }
    }
`;