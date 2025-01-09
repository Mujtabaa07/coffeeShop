import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../Store/cartSlice";
import Button from "../componets/Button";

const CakeContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem; // Added top padding for navbar
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb; // Warm background color
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #78350f; // Warm brown color
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px; // Slightly reduced to center content more
  margin: 0 auto;
`;
const ProductCard = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.9);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
`;

const OverlayText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const ProductInfo = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #4a2c2a;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }
    
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  }
`;

const products = [
    {
        id: 36,
        name: "Oreo cheese cake",
        price: 9.2,
        image:
          "https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg",
        description:
          "Creamy cheesecake with an Oreo crust and topping, rich and indulgent.",
      },
      {
        id: 37,
        name: "Chocolate cake",
        price: 7.2,
        image:
          "https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Moist and decadent, a classic chocolate cake perfect for any celebration.",
      },
      {
        id: 38,
        name: "Red velvet cake",
        price: 4.2,
        image:
          "https://img.freepik.com/free-photo/top-view-red-strawberry-cake-delicious-with-tea-table-fruit-color-cake-biscuit-sweet_140725-28319.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Rich and velvety, a moist red cake with cream cheese frosting, elegant and delicious.",
      },
      {
        id: 39,
        name: "Cheese cake",
        price: 8.2,
        image:
          "https://img.freepik.com/premium-photo/citrus-cheesecake-cake-with-kumquats_82780-1574.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Creamy and smooth, a classic cheesecake with a graham cracker crust, perfect for dessert.",
      },
      {
        id: 40,
        name: "Blueberry cake",
        price: 3.2,
        image:
          "https://img.freepik.com/premium-photo/pieces-pie-from-cottage-cheese-blueberries_116441-1516.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Moist and bursting with blueberries, a sweet and tangy cake perfect for any occasion.",
      },
      {
        id: 41,
        name: "Strawberry cake",
        price: 6,
        image:
          "https://img.freepik.com/free-photo/delicious-cake-with-strawberries_23-2150797874.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Light and fluffy, a sweet strawberry cake with creamy frosting, perfect for summer.",
      },
];
function Cake() {
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
  
    return (
      <CakeContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Cake Selection
        </Title>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ position: "relative" }}>
                <ProductImage src={product.image} alt={product.name} />
                <Overlay className="overlay">
                  <OverlayText>{product.description}</OverlayText>
                </Overlay>
              </div>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
                <StyledButton onClick={() => handleAddToCart(product)}>Add to Cart</StyledButton>
  
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </CakeContainer>
    );
  }
  
  export default Cake;
  