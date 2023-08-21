import { HomeIcon } from '../Buttons/styles';
import { Container, ButtonMenu } from './styles';
import { BsCameraReels, BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineVideoLibrary } from 'react-icons/md';


function SideMenuTable() {
  return (
        <>
            <Container>
                <ButtonMenu className='active'>
                    <HomeIcon />
                    <span>Inicio</span>
                </ButtonMenu>
                <ButtonMenu>
                    <BsCameraReels />
                    <span>Short</span>
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
  )
}

export default SideMenuTable;