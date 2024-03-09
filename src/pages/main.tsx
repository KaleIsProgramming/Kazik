import styled  from '@emotion/styled';
import { NavBar, Contact, PresentationContainer, AboutUsSection, Products } from '../components'; 

export const MainPage = () => {

    return(
        <Main>
            <NavBar />
            <PresentationContainer />
            <AboutUsSection />
            <Products />
            <Contact />
        </Main>
    )
}

const Main = styled.div`
    min-height: 100vh;
`;