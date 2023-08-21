import Footer from '../Footer';
import { Container, Button, HomeIcon, Separator, Avatar, Title, Dots } from './styles';
import { BiCaretRightSquare,BiHelpCircle, BiLike, BiVideoPlus, BiRadioCircle } from 'react-icons/bi';
import { BsCollectionPlay, BsCameraReels, BsFlag, BsBroadcast, BsClock, BsChevronDown } from 'react-icons/bs';
import { MdOutlineVideoLibrary, MdOutlineFeedback, MdSportsSoccer, MdOutlineSettings, MdHistory } from 'react-icons/md';
import { IoNewspaperOutline, IoMusicalNoteOutline } from 'react-icons/io5';
import { LuGamepad } from 'react-icons/lu';
import { PiFireSimpleLight } from 'react-icons/pi';
// import Channels from '../../Utilitis/channels';



const Channels = [
    {
        name: "Reis do Rompimento",
        dot: true,
    },
    {
        name: "Codigo Fonte TV",
        dot: false,
    },
    {
        name: "Fly Skuad",
        dot: true,
    },
    {
        name: "Programador Br - Tutorias",
        dot: false,
    },
    {
        name: "Rocketseat",
        dot: true,
    },
    {
        name: "Mostrar mais 21",
        dot: false,
    },
];



function Buttons() {
  return (
        <>
            <Container>

                <Button className='active'>
                    <HomeIcon />
                    <span>Início</span>
                </Button>
                <Button>
                    <BsCameraReels />
                    <span>Shorts</span>
                </Button>
                <Button>
                    <BsCollectionPlay />
                    <span>Subscrições</span>
                </Button>
                <Separator />

                <Button>
                    <MdOutlineVideoLibrary />
                    <span>Biblioteca</span>
                </Button>
                <Button>
                    <MdHistory />
                    <span>Histórico</span>
                </Button>
                <Button>
                    <BiCaretRightSquare />
                    <span>Os seus vídeos</span>
                </Button>
                <Button>
                    <BsClock />
                    <span>Ver mais tarde</span>
                </Button>
                <Button>
                    <BiLike />
                    <span>Videos de que gostaste</span>
                </Button>
                <Button>
                    <BsChevronDown />
                    <span>Mostrar mais</span>
                </Button>
                <Separator />


                <Title>Subscrições</Title>
                {
                    Channels.map((item) => (
                        <Button>
                            <Avatar />
                            <span>{item.name}</span>
                            <Dots dot={item.dot} />
                        </Button>
                    ))
                }
                <Button className='mostrarMais'>
                    <BsChevronDown />
                    <span>Mostrar mais 26</span>
                </Button>

                <Separator />
                <Title>Explorar</Title>
                <Button>
                    <PiFireSimpleLight />
                    <span>Tendências</span>
                </Button>
                <Button>
                    <IoMusicalNoteOutline />
                    <span>Música</span>
                </Button>
                <Button>
                    <BsBroadcast />
                    <span>Em direito</span>
                </Button>
                <Button>
                    <LuGamepad />
                    <span>Videojogos</span>
                </Button>
                <Button>
                    <IoNewspaperOutline />
                    <span>Notícias</span>
                </Button>
                <Button>
                    <MdSportsSoccer />
                    <span>Desporto</span>
                </Button>

                <Separator />
                <Title>Mais vídeos do YouTube</Title>
                <Button>
                    <BiRadioCircle />
                    <span>YouTube Studio</span>
                </Button>
                <Button>
                    <BiRadioCircle />
                    <span>YouTube Kids</span>
                </Button>

                <Separator />
                <Button>
                    <MdOutlineSettings />
                    <span>Definições</span>
                </Button>
                <Button>
                    <BsFlag />
                    <span>Historico de denúncias</span>
                </Button>
                <Button>
                    <BiHelpCircle />
                    <span>Ajuda</span>
                </Button>
                <Button>
                    <MdOutlineFeedback />
                    <span>Enviar feddback</span>
                </Button>

                <Separator />

                <Footer />


            </Container>
        </>
  );
}

export default Buttons;