import styled from "@emotion/styled";


export const Products = () => {

    return(
        <ProductsContainer>
            <Header>
                NASZE PRODUKTY
            </Header>
            <Product>
                123
            </Product>
            <Product>
                321
            </Product>
            <Product>
                213
            </Product>
        </ProductsContainer>
    )
}



const ProductsContainer = styled.div`
    height: 290vh;
    width: 100%;
`;

const Header = styled.h1`
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Product = styled.div`
    height: 90vh;
    width: 90%;
    margin-left: 10%;
`;