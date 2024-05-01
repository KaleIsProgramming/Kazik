import { FC, useState, useEffect } from "react";
import { WidthInterface } from "./helper";
import styled from "@emotion/styled";
const logo = require('../images/logo.png');

export const NavBar:FC<WidthInterface> = ({data}) => {

    const [isBurgerOpened, setIsBurgerOpened] = useState(false);

    useEffect(() => {
        if(isBurgerOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    },[isBurgerOpened]);

    return(
        <NavBarContainer>
            {data >= 1390 ? 
            <>
                <LogoContainer>
                    <a href="/"><img src={logo} alt="logo" /></a>
                </LogoContainer>
                <AboutUs>
                    <a href="#aboutus">O nas</a>
                </AboutUs>
                <Products>
                    <a href="#products">Nasze produkty</a>
                </Products>
                <Contact>
                    <a href="#contact">Kontakt</a>
                </Contact>
                <Filler />
                <BlackBox>
                    <a href="#"></a><span></span><a href="#"></a>
                </BlackBox>
            </> 
            : 
            <>
                {
                isBurgerOpened ? 
                <OpenBurgerContainer>

                    <CloseIconContainer>
                        <i onClick={() => setIsBurgerOpened(!isBurgerOpened)} className="fa-solid fa-xmark"></i>
                    </CloseIconContainer>
                    <div>
                        <a onClick={() => setIsBurgerOpened(!isBurgerOpened)} href="#aboutus">O nas</a>
                    </div>
                    <div>
                        <a onClick={() => setIsBurgerOpened(!isBurgerOpened)} href="#products">Nasze produkty</a>
                    </div>
                    <div>
                        <a onClick={() => setIsBurgerOpened(!isBurgerOpened)} href="#contact">Kontakt</a>
                    </div>
                    <div>
                        <a href="#"></a><span></span><a href="#"></a>
                    </div>

                </OpenBurgerContainer> : 
                
                <>
                    <LogoContainer>
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </LogoContainer>
                    <AboutUs>
                    </AboutUs>
                    <Products>
                    </Products>
                    <Contact>
                        
                    </Contact>
                    <Filler />
                    <BlackBox>
                        <i onClick={() => setIsBurgerOpened(!isBurgerOpened)} className="fa-solid fa-bars"></i>
                    </BlackBox >
                </>
                }
            </>
            }

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

    z-index: 9999;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 11%;
    display: flex;
    align-items: center;
    margin-right: 3%;
    margin-left: 10%;

    a {
        height: 11.6vh;
        background: white;
        img {
            max-height: 100%;
        }
    }

    @media screen and (max-width: 1390px) {


        a {

            img {
                max-height: 100%;
            }
        }
    }
`;
const AboutUs = styled.div`
    height: 100%;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
        text-decoration: none;
        color: white;
    }

    a:hover {
        scale: 1.1;
    }
`;
const Products = styled.div`
    height: 100%;
    width: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
        text-decoration: none;
        color: white;
    }

    a:hover {
        scale: 1.1;
    }
`;
const Contact = styled.div`
    height: 100%;
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;

    
    a {
        cursor: pointer;
        font-size: 150%;
        transition: 0.5s;
        text-decoration: none;
        color: white;
    }

    a:hover {
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
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 150%;
    }

    a {
        margin: 10px;
        cursor: pointer;
        font-size: 130%;
        transition: 0.5s;
        text-decoration: none;
        color: white;
    }

    span {
        font-size: 140%;
    }
`;

const OpenBurgerContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;

    div {
        margin: 40px;
        
        

        a{ 
            color: white;
            font-size: 150%;
            font-weight: 500;
            margin: 20px;

            &:hover {
                transition: 0.5s;
                scale: 1.05;
            }
        }

        span {
            font-size: 160%;
        }
    }
`;

const CloseIconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    i {
        font-size: 200%;
    }
`;