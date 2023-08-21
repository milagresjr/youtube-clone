import { Container, Content, ImgThumb, ChannelAvatar, ChannelInfo, Title, ChannelName, VerifyIcon, MoreInfo, Dots } from './styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { VideoInfo } from '../../Utilitis/VidInfo';

function CardVid() {
    return (
        <>
            {
                VideoInfo.map(item => (
                    <Container> 
                        <ImgThumb />
                        <Content>
                            <ChannelAvatar />
                            <ChannelInfo>
                                <Title>
                                    {item.title}
                                <BsThreeDotsVertical />
                                </Title>
                                <ChannelName>{item.nameChannel} <VerifyIcon verify={item.verify} /></ChannelName>
                                <MoreInfo>
                                    <p>{item.totViews} Visualizações</p>
                                    <Dots />
                                    <p>{item.time}</p>
                                </MoreInfo>
                            </ChannelInfo>
                        </Content>
                    </Container>
                ))
            }
        </>
    );
}

export default CardVid;