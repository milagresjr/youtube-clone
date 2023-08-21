import SectionVid from '../SectionVid';
import Tabs from '../Tabs';
import VideoShorts from '../VideoShorts';
import { Container, Divider, ArrowDownIcon } from './styles';

function Main() {
  return (
        <>
            <Container>
                <Tabs />
                <SectionVid />
                <VideoShorts />
                <Divider>
                  <ArrowDownIcon />
                </Divider>
                <SectionVid />
            </Container>
        </>
  );
}

export default Main;