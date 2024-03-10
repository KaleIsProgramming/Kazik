import styled from "@emotion/styled";

export const AboutUsSection = () => {

    return(
        <AboutUs>
            <Header>
                KIM JESTEŚMY?
            </Header>
            <ContentContainer  id="products">
                <p>
                    Od ponad 20 lat projektujemy i produkujemy  nowe rozwiązania dla budownictwa, przemysłu i domu.
                    Upraszczamy i optymalizujemy Twoją pracę dzięki opatentowanym rozwiązaniom, które docenili użytkownicy na całym świecie. 
                </p>
            </ContentContainer>
        </AboutUs>
    )
}


const AboutUs = styled.div`
    margin-top: 5vh;
    height: 30vh;
    width: 100%;
`;

const Header = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;

    p {
        margin-top: 2vh;
        width: 50%;
        text-align: center;
        font-size: 150%;
    }
`;