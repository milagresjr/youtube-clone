import { styled } from "styled-components";

export const Container = styled.div`
    grid-area: MA;
    padding-left: 20px;
    margin: 0 auto;
    width: 100%;
    /* background: orange; */
    @media (max-width: 700px) {
        padding: 0;
        width: 100vw;
    }
`;
export const Divider = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 7px solid var(--color-image-thumb);
    border-radius: 5px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }

    @media (max-width: 500px) {
        height: 20px;
        margin-bottom: 0px;
    }
`;
export const ArrowDownIcon = styled.div`
    
`;