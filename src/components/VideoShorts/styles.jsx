import { styled } from "styled-components";
import { FaYoutube, FaMinus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
   display: flex;
   flex-direction: column; 
   padding: 0 10px;
   /* background: pink; */

   @media (max-width: 500px) {       
        margin-top: -50px;
    }
`;
export const  Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 5px 20px;

    @media (max-width: 700px) {
        margin-bottom: 10px;
    }
`;
export const  Title = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    & > span {
        font-weight: 500;
        @media (max-width: 700px) {
            font-size: 14pt;
        }
    }
`;
export const  IconShortYoutube = styled(FaYoutube)`
    fill: red;
`;
export const IconClose = styled(AiOutlineClose)`
    /* background: #ccc; */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    fill: #ccc;
`;
export const VidShort = styled.div`
    width: 100%;
    display: flex;
    gap: 25px;
    @media (max-width: 700px) {
        gap: 13px;
        /* overflow-x: scroll; */
    }
`;
export const Content = styled.div`
    width: calc(100% / 5);
    /* border: 1px solid #000; */
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        width: 50%;
        flex-wrap: wrap;
        margin-bottom: 0px;
        & + & {
            display: none;
            &:nth-child(2) {
                display: flex;
            }
        }
    }
`;
export const FigCaption = styled.div`
    position: relative;
`;
export const ImgThumbShort = styled.div`
    width: 100%;
    height: 500px;
    background: var(--color-image-thumb);
    border-radius: 15px;
    margin-bottom: 10px;

    @media (max-width: 700px) {
        height: 280px;
        background: #212121;
    }
`;
export const TitleVideo = styled.div`
    font-size: 16pt;
    font-weight: 600;
    line-height: 25px;
    margin: 5px;
    color: var(--color-black);
    /* border: 1px solid red; */
    /* height: 50px; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipse;
    overflow: hidden;
    
    & > svg {
        float: right;
    }
    
    @media (max-width: 700px) {
        position: absolute;
        bottom: 40px;
        left: 8px;
        font-size: 12pt;
        line-height: 17px;
        color: #fff;
    }
`;
export const  Views = styled.div`
    font-size: 14pt;
    margin: 5px 5px;
    color: var(--text-secondary);

    @media (max-width: 700px) {
        position: absolute;
        bottom: 20px;
        left: 8px;
        font-size: 11pt;
        white-space: nowrap;
        text-overflow: ellipse;
        overflow: hidden;
        color: #fff;
    }
`;