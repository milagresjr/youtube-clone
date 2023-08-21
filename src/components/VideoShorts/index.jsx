import { Container, Header, Title, IconShortYoutube, IconClose, VidShort, Content, FigCaption, ImgThumbShort, TitleVideo, Views } from './styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ShortsInfo } from '../../Utilitis/VidShortsInfo';

function VideoShorts() {
    return (
        <>
            <Container>
                <Header>
                    <Title><IconShortYoutube /> <span>Shorts</span></Title>
                    <IconClose />
                </Header>
                <VidShort>
                {
                    ShortsInfo.map(item => (
                        <Content>
                            <FigCaption>
                                <ImgThumbShort />
                                <TitleVideo>
                                    {item.title}
                                    <BsThreeDotsVertical />
                                </TitleVideo>
                                <Views>{item.totViews} visualizacoes</Views>
                            </FigCaption>
                        </Content>
                    ))
                }
                </VidShort>
            </Container>
        </>
    )
}

export default VideoShorts;