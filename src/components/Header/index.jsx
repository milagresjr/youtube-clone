import { Container, MenuIcon, SearchArea, InputSearch, KeyboardIcon, SearchIcon, FillMicIcon, MicIcon, VidIcon, BellIcon, Avatar } from './styles';

function Header() {
  return (
    <Container>

        <div>
          <MenuIcon />
          <img src="/youtube-logo.png" alt="Youtube Logo" />
        </div>

        <div>
          <SearchArea>
            <InputSearch type="search" placeholder="Pesquisa" />
            <KeyboardIcon />
            <div className='searcharea'>
              <SearchIcon />
            </div>
          </SearchArea>
          <FillMicIcon>
            <MicIcon />
          </FillMicIcon>
          
        </div>

        <div>
          <VidIcon />
          <BellIcon />
          <Avatar />
        </div>

    </Container>
  );
}

export default Header;