import styled from "@emotion/styled";

export const Contact = () => {

    return(
        <ContactUs>
            <AdresContainer id="contact">
                <h3>Aretus</h3>
                <p>ul. Iskierki 40/1</p>
                <p>62-080 Lusówko</p>
            </AdresContainer>

            <NumbersContainer>
                <h3>Telefony kontaktowe</h3>
                <p>+48 508 186 062</p>
                <p>+48 609 200 402</p>
            </NumbersContainer>

            <SocialMediaContainer>
                <Mail href="mailto:aretus8@gmail.com">aretus8@gmail.com</Mail>
                <div>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </SocialMediaContainer>
        </ContactUs>
    )
}


const ContactUs = styled.div`
    height: 30vh;
    width: 82%;
    margin-left: 10%;
    border-top: 2px solid #d5d5d5;
    display: flex;
`;

const AdresContainer = styled.div`
    height: 100%;
    width: 25%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
        width: 50%;
        height: 30%;
        font-size: 300%;
        font-style: italic;
        margin-top: 9%;
        color: #C40A34;
        font-weight: 500;
    }
    p {
        font-size: 130%;
        font-weight: 500;
        width: 50%;
        height: 10%;
    }
`;

const NumbersContainer = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
        width: 70%;
        height: 20%;
        font-size: 150%;
        font-style: italic;
        font-weight: 500;
        margin-top: 15%;
        margin-left: 20%;
    }
    p {
        font-size: 130%;
        font-weight: 500;
        width: 70%;
        margin-left: 20%;
        height: 10%;
    }
`;

const SocialMediaContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;

    div {
        height: 80%;
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            color: black;
            font-size: 300%;
        }
    }
`;

const Mail = styled.a`
    height: 80%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: right;
    color: black;
    font-size: 150%;
    margin-right: 20%;
`;