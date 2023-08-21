import { styled } from "styled-components";

export const Container = styled.div`
    padding: 15px;
    margin-bottom: 50px;
    width: 300px;
    border: 0px solid #000;
    
    & > p {
        margin-bottom: 20px;
        & > a {
            text-decoration: none;
            margin-right: 5px;
            font-size: 1.1rem;
            line-height: 1.2rem;
            font-weight: 600; 
            color: #606060;
        }
    }

    & > span {
        color: #909090;
    }
`;