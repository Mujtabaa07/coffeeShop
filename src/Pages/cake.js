import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "@fortawesome/fontawesome-free/css/all.min.css";

const CakeContainer = styled.div`

  padding: 6rem 2rem 4rem 2rem; // Added top padding for navbar

  padding: 6rem 2rem 4rem 2rem;

  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 2rem;
  max-width: 1100px;
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
  color: #78350f;
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
    background: #5a2c0c;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  margin-left: 3rem;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
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

function Cake() {
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
        [product.id]: 1,
      });
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleIncrement = (product) => {
    const newQuantity = (quantities[product.id] || 0) + 1;
    setQuantities({
      ...quantities,
      [product.id]: newQuantity,
    });
    dispatch(addToCart({ ...product, quantity: newQuantity }));
  };

  const handleDecrement = (product) => {
    if (quantities[product.id] > 1) {
      const newQuantity = quantities[product.id] - 1;
      setQuantities({
        ...quantities,
        [product.id]: newQuantity,
      });
      dispatch(addToCart({ ...product, quantity: newQuantity }));
    } else {
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[product.id];
      setQuantities(updatedQuantities);
      dispatch(removeFromCart(product.id));
    }
  };

  const products = [
    {
      id: 36,
      name: "Oreo cheese cake",
      price: 9.2,
      image: "https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg",
      description: "Creamy cheesecake with an Oreo crust and topping, rich and indulgent.",
    },
    {
      id: 37,
      name: "Chocolate cake",
      price: 7.2,
      image: "https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg",
      description: "Moist and decadent, a classic chocolate cake perfect for any celebration.",
    },
    {
      id: 38,
      name: "Red velvet cake",
      price: 4.2,
      image: "https://img.freepik.com/free-photo/top-view-red-strawberry-cake-delicious-with-tea-table-fruit-color-cake-biscuit-sweet_140725-28319.jpg",
      description: "Rich and velvety, a moist red cake with cream cheese frosting, elegant and delicious.",
    },
    {
      id: 39,
      name: "Cheese cake",
      price: 8.2,
      image: "https://img.freepik.com/premium-photo/citrus-cheesecake-cake-with-kumquats_82780-1574.jpg",
      description: "Creamy and smooth, a classic cheesecake with a graham cracker crust, perfect for dessert.",
    },
    {
      id: 40,
      name: "Blueberry cake",
      price: 3.2,
      image: "https://img.freepik.com/premium-photo/pieces-pie-from-cottage-cheese-blueberries_116441-1516.jpg",
      description: "Moist and bursting with blueberries, a sweet and tangy cake perfect for any occasion.",
    },
    {
      id: 41,
      name: "Strawberry cake",
      price: 6.0,
      image: "https://img.freepik.com/free-photo/delicious-cake-with-strawberries_23-2150797874.jpg",
      description: "Light and fluffy, a sweet strawberry cake with creamy frosting, perfect for summer.",
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <CakeContainer>

      <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           Our Cake Selection
        </Title>

      <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Our Cake Selection
      </Title>
      <SearchFilterContainer>
     
      <SearchInput
    type="text"
    placeholder="Search for cake..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <SearchButton onClick={() => console.log("Search clicked!")}>
    Search
  </SearchButton>

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
                <>
                  <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  <StyledButton onClick={() => handleAddToCart(product)}>Buy Now</StyledButton>
                </>
              ) : (
                <QuantityControls>
                  <QuantityButton onClick={() => handleDecrement(product)}>-</QuantityButton>
                  <QuantityDisplay>{quantities[product.id]}</QuantityDisplay>
                  <QuantityButton onClick={() => handleIncrement(product)}>+</QuantityButton>
                </QuantityControls>
              )}
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </CakeContainer>
  );
}


export default Cake;
