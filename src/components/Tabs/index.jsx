import { Container, TabButton } from './styles';

const tabs = [
    "videjogos","Música", "Freestyle Rap","Javascript","Programação",
    "Podcast","Real Madrid","Cálculo","Computadores","Em direito","Matematica"
    
]

function Tabs() {
  return (
        <>
            <Container>
                <TabButton className='active'>
                    Todos
                </TabButton>
                {
                    tabs.map(item => (
                        <TabButton>
                            {item}
                        </TabButton>
                    ))
                }
            </Container>
        </>
  );
}

export default Tabs;