import { styled, css } from "styled-components";
import { MdMenu } from "react-icons/md";
import { IoNotificationsOutline, IoMenuOutline, IoSearch, IoKeyOutline, IoSearchOutline, IoVideocamOutline } from "react-icons/io5";
import { BiSolidKeyboard, BiSolidMicrophone, BiBell, BiVideoPlus } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";

export const Container = styled.div`
    grid-area: HD;
    /* width: 100%; */
    height: 70px;
    padding: 0px 32px;
    background: var(--color-white);
    /* background: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 100;

    & > div {
        display: flex;
        align-items: center;
        &:nth-child(1) {
            flex-grow: 1;
            display: flex;
            justify-content: flex-start;
            /* background: blue; */
            & > img {
                width: 140px;
                @media (max-width: 700px) {
                    width: 120px;
                }
            }

            @media (max-width: 700px) {
                width: 45%;
            }
        }
        &:nth-child(2) {
            flex-grow: 2;
            display: flex;
            /* background: orange; */
            @media (max-width: 700px) {
                width: 10%;
            }
        }
        &:nth-child(3) {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
            /* background: pink; */
            @media (max-width: 700px) {
                flex-grow: 0;
            }
        }
        & > svg {
            margin-right: 20px;
        }
    }
    @media (max-width: 700px) {
        z-index: 200;
        /* border-bottom: 1px solid #000; */
        box-shadow: #000 0px 1px 1px;
    }
    @media (max-width: 550px) {
        padding: 5px;
    }
`;

const cssIcons = css`
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    @media (max-width: 550px) {
        display: none;
    }
`;

export const MenuIcon = styled(AiOutlineMenu)`
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    @media (max-width: 550px) {
        display: none;
    }
`;
export const SearchArea = styled.div`
    display: flex;
    position: relative;
    margin-right: 20px;
    width: 100%;
    /* background: green; */
    justify-content: flex-end;
    
    & > div {
        background: var(--color-input);
        width: 90px;
        height: 55px;
        border-radius: 0px 30px 30px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-input-border);
        border-left: none;
        
        @media (max-width: 550px) {
            width: 10px;
        }    
        @media (max-width: 700px) {
            border: none;
            margin-right: 5px;
            background: none;
        }

    }
`;
export const InputSearch = styled.input`
    border: 1px solid var(--color-input-border);
    width: 100%;
    height: 55px;
    padding: 0px 4px 0px 16px;
    color: #111;
    border-radius: 30px 0px 0px 30px;
    display: flex;
    align-items: center;
    font-size: 14pt;
    &::placeholder {
        color: var(--color-input-placeholder);
        font-size: 22px;
        font-weight: 500;
    }

    &:focus {
        border-color: blue;
    }

    @media (max-width: 700px) {
        display: none;
    }

   
`;
export const KeyboardIcon = styled(BiSolidKeyboard)`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 100px;
    top: 20%;
    flex-shrink: 0;

    @media (max-width: 700px) {
        display: none;
    }
`;
export const SearchIcon = styled(IoSearchOutline)`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
`;
export const FillMicIcon = styled.div`
    padding: 20px;
    border-radius: 50%;
    background: var(--color-gray);
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 550px) {
        display: none;
    }
`;
export const MicIcon = styled(BiSolidMicrophone)`
    width: 34px;
    height: 34px;
    flex-shrink: 0;
`;
export const VidIcon = styled(BiVideoPlus)`
    ${cssIcons}
`;
export const BellIcon = styled(CiBellOn)`
    ${cssIcons}
`;
export const Avatar = styled.div`
    width: 44px;
    height: 44px;
    background: var(--color-image-thumb);
    border-radius: 50%;
    flex-shrink: 0;

    @media (max-width: 500px) {
        width: 34px;
        height: 34px;
    }
`;