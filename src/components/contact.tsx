import { FC } from "react";
import { WidthInterface } from "./helper";
import styled from "@emotion/styled";

export const Contact:FC<WidthInterface> = ({data}) => {

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
                <Mail href="mailto:aretus8@gmail.com">aretus@aretus8.com</Mail>
                {data >= 1390 ?
                 <>
                    <div>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                 </> 
                 :
                  <div>
                    <div>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div> 
                  }

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

    @media screen and (max-width:1390px) {
        min-height: 20vh;
        margin-top: 10vh;
        display: block
    }
`;

const AdresContainer = styled.div`
    height: 100%;
    width: 25%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
        width: 50%;
        min-height: 30%;
        font-size: 300%;
        font-style: italic;
        margin-top: 30px;
        color: #C40A34;
        font-weight: 500;
    }
    p {
        font-size: 130%;
        font-weight: 500;
        width: 50%;
        min-height: 10%;
    }

    @media screen and (max-width:1390px) {
        height: 180px;
        width: 100%;
        display: block;
        p {
            font-size: 130%;
            font-weight: 500;
            width: 50%;
            height: 10%;
            margin: 15px 0;
        }
    }
`;

const NumbersContainer = styled.div`
    min-height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
        width: 70%;
        min-height: 20%;
        font-size: 150%;
        font-style: italic;
        font-weight: 500;
        margin-top: 50px;
        margin-left: 20%;
    }
    p {
        font-size: 130%;
        font-weight: 500;
        width: 70%;
        margin-left: 20%;
        min-height: 10%;
    }
    @media screen and (max-width:1390px) {
        min-height: 30%;
        width: 100%;
        display: block;

        h3 {
        width: 70%;
        height: 20%;
        font-size: 150%;
        font-style: italic;
        font-weight: 600;
        margin-top: 0;
        margin-left: 0;
    }
    p {
        font-size: 130%;
        font-weight: 500;
        width: 70%;
        margin-left: 0;
        height: 10%;
        margin: 15px 0;
    }
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
    @media screen and (max-width:1390px) {
        height: 150px;
        width: 100%;
        align-items: none;
        justify-content: none;
        display: block;

        div { 
            height: 25%;
            display: flex;
            width: 100%;
            justify-content: left;
            div {
                height: 30px;
                width: 60px;
                display: block;
                align-items: center;
                justify-content: center;

                a {
                    color: black;
                    font-size: 300%;
                }
            }

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

    @media screen and (max-width:1390px) {
        margin-top: 30px;
        height: 50px;
        display: block;
        width: 100%;
    }
`;