import { styled } from "styled-components";
import { MdHome, MdHomeFilled } from "react-icons/md";

export const Container = styled.div`
    margin-top: 10px;
`;
export const Button = styled.div`
    display: flex;
    padding: 10px 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 280px;
    transition: background 0.1s ease-in-out;
    font-weight: 500;
    position: relative;

    &.mostrarMais {
        padding-left: 25px;
    }

    & > svg {
        width: 24px;
        height: 24px;
    }

    & > span {
        margin-left: 30px;
        font-size: 14pt;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    & + &{
        margin-top: 0px;
        & > span {
            font-weight: 500;
        }
    }

    &:hover, &.active {
        background: #f0f0f0;
    }
    &.active {
        font-weight: 600;
        & > svg {
            width: 30px;
            height: 30px;
            flex-shrink: 0;
        }
    }
`;
export const HomeIcon = styled(MdHomeFilled)`
    
`;

export const Separator = styled.div`
    width: 300px;
    border-bottom: 1px solid #d9d9d9;
    margin: 15px 10px;
`;

export const Title = styled.h2`
  color: #606060;
  font-weight: 500;
  font-size: 16pt;
  margin: 25px 20px 0;
`;

export const Avatar = styled.div`
    width: 34px;
    height: 34px;
    background: var(--color-gray);
    border-radius: 50%;
    flex-shrink: 0;
`;

export const Dots = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #069;
    flex-shrink: 0;
    position: absolute;
    right: 15px;
    display: ${(props) => props.dot ? 'inline':'none'};
`;
