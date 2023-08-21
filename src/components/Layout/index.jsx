import { Container } from './styles';
import Header from '../Header';
import SideMenu from '../SideMenu';
import Main from '../Main';
import SideMenuTable from '../SideMenuTable';
import MenuBottomMobile from '../MenuBottomMobile';

function Layout() {
  return (
    <Container>
        <Header />
        <SideMenu />
        <SideMenuTable />
        <Main />
        <MenuBottomMobile />
    </Container>
  );
}

export default Layout;