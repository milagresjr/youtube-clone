import { HomeIcon } from '../Buttons/styles';
import { Container, ButtonMenu } from './styles';
import { BsCameraReels, BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineVideoLibrary } from 'react-icons/md';


function MenuBottomMobile() {
  return (
        <>
            <Container>
                <ButtonMenu>
                    <HomeIcon />
                    <span>Início</span>
                </ButtonMenu>
                <ButtonMenu>
                    <BsCameraReels />
                    <span>Shorts</span>
                </ButtonMenu>
                <ButtonMenu>
                    <BsCollectionPlay />
                    <span>Subscrições</span>
                </ButtonMenu>
                <ButtonMenu>
                    <MdOutlineVideoLibrary />
                    <span>Biblioteca</span>
                </ButtonMenu>
            </Container>
        </>
  );
}

export default MenuBottomMobile;