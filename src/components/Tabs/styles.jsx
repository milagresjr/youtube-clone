import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    position: fixed;
    background: var(--color-white);
    /* background: green; */
    z-index: 100;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-white);
    }

    @media (max-width: 700px) {
        height: 55px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const TabButton = styled.div`
    background: var(--color-gray);
    padding: 10px 18px;
    border-radius: 13px;
    font-size: 14pt;
    white-space: nowrap;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: var(--color-button-hover);
    }

    &.active {
        background: var(--color-black);
        color: #fff;
        @media (max-width: 700px) {
            background: #606060;
        }
    }
    & + & {
        margin-left: 10px;
    }
`;