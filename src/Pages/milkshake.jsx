import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../Store/cartSlice";
import Button from "../componets/Button";

const MilkshakeContainer = styled.div`
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
            id: 26,
            name: "Strawberry smoothie",
            price: 6.2,
            image:
              "https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg",
            description:
              "Creamy and sweet, made with fresh strawberries, yogurt, and a touch of honey.",
          },
          {
            id: 27,
            name: "Mango smoothie",
            price: 3.2,
            image:
              "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
            description:
              "Tropical and refreshing, blended with ripe mangoes, banana, and coconut milk.",
          },
          {
            id: 28,
            name: "Strawberry banana smoothie",
            price: 6.45,
            image:
              "https://www.purelykaylie.com/wp-content/uploads/2023/07/strawberry-banana-smoothie-bowl-5.jpg",
            description:
              "A classic combination of strawberries and bananas, creamy and naturally sweet.",
          },
          {
            id: 29,
            name: "Creamy, Nutty Coffee Smoothie",
            price: 7.2,
            image:
              "https://www.seriouseats.com/thmb/dwKjOOPQu1ki3pSf1M4eB7FGVzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240206-SEA-Coffee-Smoothie-hero-27d1864a41cc411ea7ff0c64ada77a2e.jpg",
            description:
              "A rich blend of coffee, nuts, and cream, perfect for a morning energy boost.",
          },
          {
            id: 30,
            name: "Coffee Smoothie",
            price: 6.3,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y9in1wQf-XCl9sdyuw5pXWT_CrYn8P5j7A&s",
            description:
              "Creamy and caffeinated, made with cold brew, banana, and almond milk.",
          },
          {
            id: 31,
            name: "Chocolate Milkshake",
            price: 5.2,
            image:
              "https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg",
            description:
              "Rich and indulgent, made with chocolate ice cream, milk, and whipped cream.",
          },
          {
            id: 32,
            name: "Oreo Milkshake",
            price: 5.2,
            image:
              "https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048",
            description:
              "Creamy and delicious, blended with Oreo cookies, ice cream, and milk.",
          },
          {
            id: 33,
            name: "Strawberry Oreo Milkshake",
            price: 2.6,
            image:
              "https://marleysmenu.com/wp-content/uploads/2021/08/Strawberry-Oreo-Milkshake-Featured-Image.jpg",
            description:
              "A sweet blend of strawberries, Oreo cookies, and ice cream, perfect for dessert lovers.",
          },
          {
            id: 34,
            name: "Mixed Nut and Fruit Milkshake",
            price: 8.2,
            image:
              "https://images.mrcook.app/recipe-image/018d50f7-344f-7744-97e3-1f89e5a3cf29",
            description:
              "A nutritious blend of mixed nuts, fruits, and milk, creamy and satisfying.",
          },
          {
            id: 35,
            name: "Peanut Butter Milkshake",
            price: 5.8,
            image:
              "https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Peanut-Butter-Milkshake-Square.jpg",
            description:
              "Rich and creamy, made with peanut butter, ice cream, and milk, a peanut butter lover's dream.",
          },
];
function Milkshake() {
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
  
    return (
      <MilkshakeContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Milkshake Selection
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
      </MilkshakeContainer>
    );
  }
  
  export default Milkshake;
  