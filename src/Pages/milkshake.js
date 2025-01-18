import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "@fortawesome/fontawesome-free/css/all.min.css";

const MilkshakeContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem; // Added top padding for navbar
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb; // Warm background color
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content)); ));
  gap: 2rem;
  max-width: 1100px; // Slightly reduced to center content more
  margin: 0 auto;
  justify-content: center;
 
`;
const ProductCard = styled(motion.div)`
max-width:345 px;
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

const ProductInfo = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #4a2c2a;
  margin-bottom: 1rem;
  font-weight: 600;
`;
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #78350f; // Warm brown color
`;
const Button = styled.button`
  background: #78350f;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background:#78350f;
    transform: scale(1.05);
  }
    
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  margin-left: 3rem;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
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

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const QuantityButton = styled(Button)`
  padding: 5px 10px;
  min-width: 30px;
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;
const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin-bottom: 2rem;
  gap: 5rem;
`;
const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
  width: 300px;

  &:focus {
    border-color: #6b4f4f;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
  }
`;



function Milkshake() {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProducts, setLikedProducts] = useState({});

  const toggleHeart = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleAddToCart = (product) => {
    if (!quantities[product.id]) {
      setQuantities({
        ...quantities,
        [product.id]: 1
      });
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleIncrement = (product) => {
    const newQuantity = (quantities[product.id] || 0) + 1;
    setQuantities({
      ...quantities,
      [product.id]: newQuantity
    });
    dispatch(addToCart({ ...product, quantity: newQuantity }));
  };

  const handleDecrement = (product) => {
    if (quantities[product.id] > 1) {
      const newQuantity = quantities[product.id] - 1;
      setQuantities({
        ...quantities,
        [product.id]: newQuantity
      });
      dispatch(addToCart({ ...product, quantity: newQuantity }));
    } else {
      setQuantities({
        ...quantities,
        [product.id]: 0
      });
      dispatch(removeFromCart(product.id));
    }
  };

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
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <MilkshakeContainer>
      <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Milkshake Selection
        </Title>
        <SearchFilterContainer>
        <div>
      <SearchInput
    type="text"
    placeholder="Search for milkshakes..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <SearchButton onClick={() => console.log("Search clicked!")}>
    Search
  </SearchButton>
  </div>
  </SearchFilterContainer>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <div style={{ position: 'relative' }}>
              <ProductImage src={product.image} alt={product.name} />

              <div
                onClick={() => toggleHeart(product.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: likedProducts[product.id] ? 'red' : 'gray',
                }}
              >
                <i
                  className={`fa-heart ${likedProducts[product.id] ? 'fas' : 'far'
                    }`}
                ></i>
              </div>
            </div>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              {!quantities[product.id] ? (
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>

              ) : (
                <QuantityControls>
                  <QuantityButton onClick={() => handleDecrement(product)}>-</QuantityButton>
                  <QuantityDisplay>{quantities[product.id]}</QuantityDisplay>
                  <QuantityButton onClick={() => handleIncrement(product)}>+</QuantityButton>
                </QuantityControls>
              )}
              <StyledButton onClick={() => handleAddToCart(product)}>Buy Now</StyledButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </MilkshakeContainer>
  );
}


export default Milkshake;
