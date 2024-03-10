import styled from "@emotion/styled";
const tools = require('../images/presentationContainer/narzedzia.jpg');

export const PresentationContainer = () => {

    return(
        <StyledPresentationContainer>
            <GreenBackground>
                <FloatingPhotoContainer>
                    <Photo src={tools} alt="narzedzia" />
                        <PhotoContent>

                            <HeaderContainer>
                                Narzędzia <br/>do zadań specjalnych
                            </HeaderContainer>

                            <TextContainer>
                                Jonnesway to narzędzia najwyższej jakości, zaprojektowane i wyprodukowane dla profesjonalistów, którzy w swojej pracy wymagają niezawodności. Dzięki najlepszym materiałom, ergonomii i nowoczesnemu wzornictwu Jonnesway jest doceniany przez specjalistów na całym świecie.
                            </TextContainer>

                            <ButtonContainer id="aboutus">
                                <a href="#products">zobacz wszystkie produkty</a>
                            </ButtonContainer>

                        </PhotoContent>
                    <BlackRectangle />
                </FloatingPhotoContainer>
            </GreenBackground>
        </StyledPresentationContainer>
    )
}

const StyledPresentationContainer = styled.div` 
    height: 98vh;
    width: 100%;
`;

const GreenBackground = styled.div`
    position: relative;
    height: 70%;
    width: 100%;
    background: rgb(0, 111, 61);
`;

const FloatingPhotoContainer = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    top: 11.6vh;
    width: 90%;
    height: 115%;
    background: red;
`;

const PhotoContent = styled.div`
    position: absolute;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const Photo = styled.img`
    width: 90%;
    height: 100%;
`;

const BlackRectangle = styled.div`
    width: 10%;
    background: black;
    height: 100%;
`;

const HeaderContainer = styled.h1`
    height: 30%;
    display: flex;
    align-items: center;
    font-size: 350%;
    margin-left: 12%;
`;

const TextContainer = styled.p`
   height: 15%;
   width: 40%;
   background: #00000069;
   padding: 5% 2%;
   margin-left: 12%;
   display: flex;
   align-items: center;
`;

const ButtonContainer = styled.div`
    height: 20%;    
    margin-left: 12%;
    display: flex;
    align-items: center;
    
    a {
        background: #C40A34;
        padding: 1% 6%;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 130%;
        text-decoration: none;
    }

`;