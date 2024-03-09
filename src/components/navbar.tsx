import styled from "@emotion/styled";

export const NavBar = () => {

    return(
        <NavBarContainer>
            <LogoContainer>
                LOGO
            </LogoContainer>
            <AboutUs>
                <p>O nas</p>
            </AboutUs>
            <Products>
                <p>Nasze produkty</p>
            </Products>
            <Contact>
                <p>Kontakt</p>
            </Contact>
            <Filler />
            <BlackBox />
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    position: fixed;
    height: 11.6vh;
    width: 100vw;
    background: rgb(0, 111, 61);
    color: white;
    display: flex;
    justify-content: flex-end;
    z-index: 9999;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3%;
`;
const AboutUs = styled.div`
    height: 100%;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
    }

    p:hover {
        scale: 1.1;
    }
`;
const Products = styled.div`
    height: 100%;
    width: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
    }

    p:hover {
        scale: 1.1;
    }
`;
const Contact = styled.div`
    height: 100%;
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;

    
    p {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
    }

    p:hover {
        scale: 1.1;
    }
`;

const Filler = styled.div`
    height: 100%;
    width: 27%;
`;

const BlackBox = styled.div`    
    height: 100%;
    width: 24%;
    background: black;
`;