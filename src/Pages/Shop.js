import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addToCart } from '../Store/cartSlice';
import Button from '../componets/Button';

const ShopContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const products = [
  { id: 1, name: 'Espresso', price: 2.5, image: 'https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg', type: 'hot' },
  { id: 2, name: 'Cappuccino', price: 3.5, image: 'https://img.freepik.com/free-photo/delicious-organic-latte-macchiato-with-milk_23-2148420329.jpg', type: 'hot' },
  { id: 3, name: 'Latte', price: 4, image: 'https://img.freepik.com/free-photo/cold-chocolate-cocktail-with-ice-cream_140725-940.jpg', type: 'hot' },
  { id: 4, name: 'Mocha', price: 4.5, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691385.jpg', type: 'hot' },
  { id: 5, name: 'Americano', price: 3, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691389.jpg', type: 'hot' },
  { id: 6, name: 'Macchiato', price: 3.5, image: 'https://img.freepik.com/free-photo/assortment-with-frappe-dark-background_23-2148436976.jpg', type: 'hot' },
  { id: 7, name: 'Chai', price: 3, image: 'https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg', type: 'hot' },
  { id: 8, name: 'Lemon Tea', price: 3.5, image: 'https://img.freepik.com/free-photo/cup-hot-mint-tea_144627-34462.jpg', type: 'hot' },
  { id: 9, name: 'Iced Coffee', price: 4, image: 'https://www.allrecipes.com/thmb/aizVUz1JlBwSPI_hrH4Wu1XFXSE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg', type: 'cold' },
  { id: 10, name: 'Cold Brew', price: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT116wHqWZcj-V5R5ysue8exf2n2ewy1ZTOfA&s', type: 'cold' },
  { id: 11, name: 'Iced Latte', price: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-sXM6szwUFzFY9G0NP-rnRcejgVGKXWt3A&s', type: 'cold' },
  { id: 12, name: 'Iced Mocha', price: 5.5, image: 'https://vibrantlygfree.com/wp-content/uploads/2023/07/iced-mocha-1.jpg', type: 'cold' },
  { id: 13, name: 'Frappuccino', price: 6, image: 'https://www.aguaeden.es/sites/default/files/blog_migrate/frappuccino.jpg', type: 'cold' },
];

function Shop() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('hot');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const filteredProducts = products.filter((product) => product.type === category);

  return (
    <ShopContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Beverage Selection
      </Title>
      <DropdownContainer>
        <Dropdown value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="hot">Hot Beverages</option>
          <option value="cold">Cold Beverages</option>
        </Dropdown>
      </DropdownContainer>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShopContainer>
  );
}

export default Shop;
