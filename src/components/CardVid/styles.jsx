import { styled } from "styled-components";

import { FaCircleCheck } from "react-icons/fa6";

export const Container = styled.div`
    width: calc(33.33% - 20px);
    /* border: 1px solid #000; */
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 700px) {
        width: 100%;
        margin-bottom: 0;
    }
`;
export const Content = styled.div`
    margin-top: 15px;
    position: relative;
    @media (max-width: 700px) {
        padding: 0 15px;
    }
`;
export const ImgThumb = styled.div`
    width: 100%;
    height: 250px;
    background: var(--color-image-thumb);
    border-radius: 20px;
    @media (max-width: 700px) {
        border-radius: 0px;
    }
    @media (max-width: 500px) {
        height: 200px;
    }
`;
export const ChannelAvatar = styled.div`
    width: 44px;
    height: 44px;
    position: absolute;
    background: #909090;
    border-radius: 50%;
`;
export const ChannelInfo = styled.div`
    padding-left: 60px;
`;
export const Title = styled.div`
    font-size: 16pt;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 10px;
    color: var(--color-black);
    /* border: 1px solid red; */
    /* height: 50px; */
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipse;
    overflow: hidden;

    & > svg {
        float: right;
        font-weight: bold;
    }

    @media (max-width: 700px) {
        font-size: 12pt;
        margin-bottom: 2px;
    }
`;
export const ChannelName = styled.div`
    font-size: 14pt;
    color: var(--text-secondary);
    font-weight: 500;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        font-size: 11pt;
    }
`;
export const VerifyIcon = styled(FaCircleCheck)`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-left: 5px;
    display: ${(props) => (props.verify)?'inline':'none'};
    @media (max-width: 700px) {
        width: 12px;
        height: 12px;
    }
`;
export const MoreInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;

    & > p {
        color: var(--text-secondary);
        font-size: 14pt;
        @media (max-width: 700px) {
            font-size: 11pt;
        }
    }
`;
export const Dots = styled.div`
    margin: 0 8px;
    width: 4px;
    height: 4px;
    background: var(--text-secondary);
    border-radius: 50%;
`;