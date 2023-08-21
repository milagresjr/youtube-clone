import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 100px 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 700px) {
        margin: 56px 0;
    }
`;
export const Divider = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 7px solid var(--color-image-thumb);
    border-radius: 5px;
    
    @media (max-width: 500px) {
        height: 20px;
        margin-bottom: 0px;
    }
`;