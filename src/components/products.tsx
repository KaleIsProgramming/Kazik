import { FC } from "react";
import { Link } from "react-router-dom";
import { WidthInterface } from "./helper";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const m1 = require('../images/products/m1.jpg')
const m2 = require('../images/products/m2.jpg')
//const m3 = require('../images/products/m3.jpg')


export const Products:FC<WidthInterface> = ({data}) => {

    return(
        <ProductsContainer>
            <Header>
                NASZE PRODUKTY
            </Header>
            {
            data >= 1390 ? 
            <>
                <Product
                    initial={{opacity: 0, x:1000}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1}}
                >

                    <TextContainer>
                        <TextHeader>
                        NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW Z GWINTEM<br/>
                        <span>Nr ref. 8001</span>
                        </TextHeader>
                        <Text>
                        Jedyne na rynku profesjonalne narzędzie do mieszania wszelkich zapraw, betonu, mas, gipsu , farb, mas izolacyjnych, struktur elewacyjnych i klejów itp., <span>które miesza bez pryskania szybko i dokładnie na jednolitą gładką masę</span> również doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                                Wymiary:<br/>
                                -  Średnica mieszadła:120 mm<br/>
                                -  Długość całkowita  mieszadła:   600 mm<br/>
                                -  Średnica pręta: 10 mm<br/>
                                -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                                -  Pręt o średnicy 10 mm zakończony gwintem 14 mm do mieszadeł profesjonalnych <br/>
                                - Produkt polski
                        </Text>
                    </TextContainer>
                    <ImageContainer>
                        <img src={m1} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW Z GWINTEM" />
                    </ImageContainer>

                </Product>
                <Product 
                    initial={{opacity: 0, x:-1000}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1}}
                >

                    <ImageContainer>
                        <img src={m2} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW" />
                    </ImageContainer>
                    <TextContainer>
                        <TextHeader>
                            NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW <br/>
                            <span>Nr ref. 8002</span>
                        </TextHeader>
                        <Text>
                            Narzędzie do mieszania wszelkich zapraw, betonu, mas, gipsu , farb, mas izolacyjnych, struktur elewacyjnych i klejów itp., <span>które miesza bez pryskania szybko i dokładnie na jednolitą gładką masę</span> również doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                            Wymiary:<br/>
                            -  Średnica mieszadła: 120 mm<br/>
                            -  Długość mieszadła:   600 mm<br/>
                            -  Średnica pręta: 10 mm<br/>
                            -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                            -  Pręt  sześciokątny do wiertarek<br/>
                            - Produkt polski
                        </Text>
                    </TextContainer>

                </Product>
                <Product
                    initial={{opacity: 0, x:1000}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1}}
                >

                    <TextContainer>
                        <TextHeader>
                            NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW - MINI <br/>
                            <span>Nr ref. 8003</span>
                        </TextHeader>
                        <Text>
                            Mieszadło doskonałe do mieszania w pojemnikach o małej średnicy, takich jak np. puszki od 0,7 l. do 3 l. <span>Miesza bez pryskania szybko i dokładnie na jednolitą gładką masę.</span>  Doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                            Wymiary:<br/>
                            -  Średnica mieszadła: 60 mm<br/>
                            -  Długość mieszadła:   23  mm<br/>
                            -  Średnica pręta: 4 mm<br/>
                            -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                            -  Pręt okrągły do wiertarek i wkrętarek<br/>
                            - Produkt polski
                        </Text>
                    </TextContainer>
                    <ImageContainer>
                        <img src={m1} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW - MINI " />
                    </ImageContainer>

                </Product>
            </>
            : 
            <>
                <Product
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 2}}
                >
                    <TextHeader>
                        NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW Z GWINTEM<br/>
                        <span>Nr ref. 8001</span>
                    </TextHeader>
                    <ImageContainer>
                        <img src={m1} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW Z GWINTEM" />
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                        Jedyne na rynku profesjonalne narzędzie do mieszania wszelkich zapraw, betonu, mas, gipsu , farb, mas izolacyjnych, struktur elewacyjnych i klejów itp., <span>które miesza bez pryskania szybko i dokładnie na jednolitą gładką masę</span> również doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                                Wymiary:<br/>
                                -  Średnica mieszadła:120 mm<br/>
                                -  Długość całkowita  mieszadła:   600 mm<br/>
                                -  Średnica pręta: 10 mm<br/>
                                -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                                -  Pręt o średnicy 10 mm zakończony gwintem 14 mm do mieszadeł profesjonalnych <br/>
                                - Produkt polski
                        </Text>
                    </TextContainer>


                    </Product>
                    <Product
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 2}}
                    >
                    <TextHeader>
                        NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW <br/>
                        <span>Nr ref. 8002</span>
                    </TextHeader>
                    <ImageContainer>
                        <img src={m2} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW" />
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                            Narzędzie do mieszania wszelkich zapraw, betonu, mas, gipsu , farb, mas izolacyjnych, struktur elewacyjnych i klejów itp., <span>które miesza bez pryskania szybko i dokładnie na jednolitą gładką masę</span> również doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                            Wymiary:<br/>
                            -  Średnica mieszadła: 120 mm<br/>
                            -  Długość mieszadła:   600 mm<br/>
                            -  Średnica pręta: 10 mm<br/>
                            -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                            -  Pręt  sześciokątny do wiertarek<br/>
                            - Produkt polski
                        </Text>
                    </TextContainer>

                    </Product>
                    <Product
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 2}}
                    >

                    <TextHeader>
                        NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW - MINI <br/>
                        <span>Nr ref. 8003</span>
                    </TextHeader>
                    <ImageContainer>
                        <img src={m1} alt="NIE PRYSKAJĄCE MIESZADŁO DO ZAPRAW - MINI " />
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                            Mieszadło doskonałe do mieszania w pojemnikach o małej średnicy, takich jak np. puszki od 0,7 l. do 3 l. <span>Miesza bez pryskania szybko i dokładnie na jednolitą gładką masę.</span>  Doskonale się sprawdza przy produktach o dużym stopniu rozwarstwienia, co może się zdarzyć, jeżeli produkt jest długo magazynowany.<br/><br/>
                            Wymiary:<br/>
                            -  Średnica mieszadła: 60 mm<br/>
                            -  Długość mieszadła:   23  mm<br/>
                            -  Średnica pręta: 4 mm<br/>
                            -  Wykonane jest ze stali pokrytej powłoką cynku<br/>
                            -  Pręt okrągły do wiertarek i wkrętarek<br/>
                            - Produkt polski
                        </Text>
                    </TextContainer>


                    </Product>
            </>
            
            }
            <PravicyPolicyContainer>
                <Link to="/privacy_policy">Polityka Prywatności</Link>
            </PravicyPolicyContainer>
        </ProductsContainer>
    )
}



const ProductsContainer = styled.div`
    min-height: 230vh;
    width: 100%;
    overflow-x: hidden
`;

const Header = styled.h1`
    min-height: 20vh;
    width: 100%;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C40A34;
`;

const Product = styled(motion.div)`
    min-height: 70vh;
    width: 90%;
    margin-left: 10%;
    display: flex;

    @media screen and (max-width:1390px) {
        display: block;
        margin-top: 15vh;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    height: 100%;

    @media screen and (max-width:1390px) {
        height: 50%;
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 70%;
        width: 80%;
        margin-right: 10%;
    }

    @media screen and (max-width:1390px) {
        height: 50%;
        width: 100%;
    }
`;

const TextHeader = styled.h1`
    height: 20%;
    width: 80%;
    font-size: 180%;

    span {
        font-weight: 500;
        font-size: 60%;
    }
`;

const Text = styled.p`
    height: 80%;
    width: 80%;
    font-size: 130%;
    font-weight: 300;

    span {
        font-weight: 600;
        font-style: italic;
    }
`;

const PravicyPolicyContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {

    }
`;