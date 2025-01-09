import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../Store/cartSlice";
import Button from "../componets/Button";

const CoffeeContainer = styled.div`
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
        id: 1,
    name: "Espresso",
    price: 2.5,
    image:
      "https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?t=st=1727759794~exp=1727763394~hmac=c764d48b2b28767da2c6b996ec20e0d6a5857c19724850db5e46498687e16225&w=740",
    description: "A strong, rich coffee shot, perfect for a quick pick-me-up.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 3.5,
    image:
      "https://img.freepik.com/free-photo/delicious-organic-latte-macchiato-with-milk_23-2148420329.jpg?t=st=1727761406~exp=1727765006~hmac=10f2d9d7a08693daef2ef87ff4edd99d5bc33e1813adb65c8628d088268239b5&w=1380 ",
    description:
      "Creamy and frothy, a classic Italian coffee with steamed milk.",
  },
  {
    id: 3,
    name: "Latte",
    price: 4,
    image:
      "https://img.freepik.com/free-photo/cold-chocolate-cocktail-with-ice-cream_140725-940.jpg?t=st=1727759865~exp=1727763465~hmac=ad44e2430bff005bce4db484fbef6f2ec22f05b97b41c8c6c28ecb8508c2d909&w=740 ",
    description:
      "Smooth and milky, a comforting coffee drink with a velvety texture.",
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.5,
    image:
      "https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691385.jpg?t=st=1727759888~exp=1727763488~hmac=ea5484acf51753db6069801c3df0caa601e5d09a2265109ba218d040acb3e53c&w=1380  ",
    description:
      "A sweet blend of coffee and chocolate, perfect for chocolate lovers.",
  },
  {
    id: 5,
    name: "Americano",
    price: 3,
    image:
      "https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691389.jpg?t=st=1727759909~exp=1727763509~hmac=615986b69635b1e5a35b3a09347203d49046878d7525a9588f94211a3947ff58&w=1380  ",
    description:
      "A diluted espresso shot, similar to brewed coffee but stronger.",
  },
  {
    id: 6,
    name: "Macchiato",
    price: 3.5,
    image:
      "https://img.freepik.com/free-photo/assortment-with-frappe-dark-background_23-2148436976.jpg?t=st=1727761354~exp=1727764954~hmac=20b5ddf356f56d12e139084bc8e2c14ad3c71677269de9680db9dc4d09250774&w=740 ",
    description: "An espresso with a dollop of foamed milk, rich and creamy.",
  },
  {
    id: 7,
    name: "Turkish Coffee",
    price: 3,
    image:
      "https://img.freepik.com/premium-photo/pouring-turkish-coffee_772702-2136.jpg?w=360",
    description:
      "Thick, strong, and unfiltered coffee, traditionally served in small cups.",
  },
  {
    id: 8,
    name: "Flat white",
    price: 5.5,
    image:
      "https://static.toiimg.com/thumb/86699095.cms?imgsize=59654&width=509&height=340 ",
    description:
      "Velvety microfoam poured over a double shot of espresso, smooth and creamy.",
  },
  {
    id: 9,
    name: "Nitro Cold Brew",
    price: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZcJOr1zaqJ-TkW9Ie1PcNRRrgPDnNSgX9A&s ",
    description:
      "Cold brew infused with nitrogen, creating a creamy, Guinness-like texture.",
  },
  {
    id: 10,
    name: "Doppio",
    price: 3.4,
    image:
      "https://lifeboostcoffee.com/cdn/shop/articles/Doppio_Espresso_Macchiato.jpg?v=1655197439 ",
    description:
      "A double shot of espresso, strong and intense, perfect for espresso lovers.",
  },
  {
    id: 11,
    name: "Viennese Coffee",
    price: 4,
    image:
      "https://irepo.primecp.com/2015/10/241007/Vienna-Coffee-01-12-07-OR_Category-CategoryPageDefault_ID-1242862.jpg?v=1242862 ",
    description:
      "Espresso topped with whipped cream, often served with chocolate shavings.",
  },
  {
    id: 12,
    name: "Ristretto",
    price: 5.2,
    image:
      "https://www.castironketo.net/wp-content/uploads/2023/10/is-ristretto-keto-friendly-header-image.jpg ",
    description:
      "A short shot of espresso, sweeter and more concentrated than regular espresso.",
  },
  {
    id: 13,
    name: "Red Eye",
    price: 6.2,
    image:
      "https://www.sessioncoffeedenver.com/wp-content/uploads/2024/04/what-is-a-red-eye-coffee.jpg ",
    description:
      "A cup of brewed coffee with a shot of espresso, extra strong and caffeinated.",
  },
  {
    id: 14,
    name: "Frappé",
    price: 8.2,
    image:
      "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/23/29/18/x38TQCFcRRiV1FJYbTLP_coffeefrappe2.jpg",
    description:
      "Iced coffee drink blended with milk and sugar, often topped with whipped cream.",
  },
  {
    id: 15,
    name: "Affogato",
    price: 8.6,
    image:
      "https://static.wixstatic.com/media/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg/v1/fill/w_568,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg",
    description:
      "A scoop of vanilla gelato drowned in a shot of hot espresso, sweet and creamy.",
  },
  {
    id: 16,
    name: "Cortado",
    price: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0677/6524/0096/files/coffee-in-a-glass-2022-11-02-18-50-07-utc_600x600.jpg?v=1683831169",
    description:
      "Espresso cut with a small amount of warm milk to reduce acidity.",
  },
  {
    id: 17,
    name: "Café au lait",
    price: 3.8,
    image:
      "https://blackturtlecoffee.com/cdn/shop/articles/Cafe-Au-Lait-004.jpg?v=1672848240",
    description:
      "Coffee with hot milk, similar to a latte but with a stronger coffee flavor.",
  },
  {
    id: 18,
    name: "Café Bombón",
    price: 4.6,
    image:
      "https://www.theworktop.com/wp-content/uploads/2021/11/cafe-bombon.jpg",
    description:
      "Espresso served with sweetened condensed milk, creating a layered effect.",
  },
  {
    id: 25,
    name: "Irish Coffee",
    price: 7.2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlPYx_StS2Y7x9s4hukcCyJZaDm54mgbe8g&s",
    description:
      "Coffee with Irish whiskey, sugar, and cream, a warm and boozy treat.",
  },
];
function Coffee() {
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
  
    return (
      <CoffeeContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Coffee Selection
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
      </CoffeeContainer>
    );
  }
  
  export default Coffee;
  