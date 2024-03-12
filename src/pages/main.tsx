import { useState, useEffect } from "react";
import styled  from '@emotion/styled';
import { NavBar, Contact, PresentationContainer, AboutUsSection, Products } from '../components'; 

export const MainPage = () => {

    const[width, setWidth] = useState(1980)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    },[]);

    return(
        <Main>
            <NavBar data={width} />
            <PresentationContainer data={width} />
            <AboutUsSection data={width} />
            <Products data={width} />
            <Contact data={width} />
        </Main>
    )
}

const Main = styled.div`
    min-height: 100vh;
`;