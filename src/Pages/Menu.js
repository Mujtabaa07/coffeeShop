import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const MenuContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fdf5e6, #ffe4b5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #78350f;
  margin-bottom: 2.5rem;
  font-family: "Playfair Display", serif;
  text-align: center;
  letter-spacing: 2px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const MenuCard = styled(Link)`
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 2rem 1.5rem;
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.04);
    box-shadow: 0 16px 40px rgba(139, 69, 19, 0.18);
  }
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 16px rgba(139, 69, 19, 0.15);
  background: #ffe4b5;
`;

const CardTitle = styled.h2`
  font-size: 1.7rem;
  color: #7c2214;
  font-family: "Playfair Display", serif;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const CardDesc = styled.p`
  font-size: 1.1rem;
  color: #6b4423;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ExploreButton = styled.span`
  background: #d2691e;
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);
  transition: background 0.3s;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    background: #78350f;
  }
`;

const menuCards = [
  {
    title: "Coffee",
    image: "https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?t=st=1727759794~exp=1727763394~hmac=c764d48b2b28767da2c6b996ec20e0d6a5857c19724850db5e46498687e16225&w=740",
    desc: "Explore our rich and aromatic coffee selection, from classic espresso to creamy lattes.",
    link: "/menu/coffee"
  },
  {
    title: "Cakes",
    image: "https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
    desc: "Indulge in our decadent cakes, perfect for every celebration and sweet craving.",
    link: "/menu/cakes"
  },
  {
    title: "Soups",
    image: "https://img.freepik.com/free-photo/portrait-shooting-tomato-soup-with-crackers-cheese-tomatoes-bread-table_141793-2858.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
    desc: "Warm up with our comforting soups, made with fresh ingredients and bold flavors.",
    link: "/menu/soups"
  },
  {
    title: "Milkshakes",
    image: "https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg",
    desc: "Sip on our creamy milkshakes, blended to perfection for a refreshing treat.",
    link: "/menu/milkshakes"
  }
];

function Menu() {
  return (
    <MenuContainer>
      <Title>Our Menu</Title>
      <CardsGrid>
        {menuCards.map(card => (
          <MenuCard to={card.link} key={card.title}>
            <CardImage src={card.image} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
            <CardDesc>{card.desc}</CardDesc>
            <ExploreButton>Explore</ExploreButton>
          </MenuCard>
        ))}
      </CardsGrid>
    </MenuContainer>
  );
}

export default Menu;