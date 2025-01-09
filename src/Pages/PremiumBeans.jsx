import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = styled.div`
  background: linear-gradient(135deg, #FDF5E6, #FFE4B5);
  height: 90vh;
  width: 100%;
  position:relative;

`;


const Container = styled.div`
  width: 300px;
  height: 280px;
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 150px);
`;

const CoffeeHeader = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: brown;
  border-radius: 10px;
`;

const CoffeeButton = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  background-color: #282323;
  border-radius: 50%;
`;

const CoffeeButtonOne = styled(CoffeeButton)`
  left: 15px;
`;

const CoffeeButtonTwo = styled(CoffeeButton)`
  left: 50px;
`;

const CoffeeDisplay = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: green;
  border: 5px solid #43beae;
  box-sizing: border-box;
`;

const CoffeeDetails = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`;

const CoffeeMedium = styled.div`
  width: 90%;
  height: 160px;
  position: absolute;
  top: 80px;
  left: calc(50% - 45%);
  background-color: #dc6565;
`;

const CoffeeMediumBefore = styled.div`
  width: 90%;
  height: 100px;
  background-color: #776f6e;
  position: absolute;
  bottom: 0;
  left: calc(50% - 45%);
  border-radius: 20px 20px 0 0;
`;

const CoffeeExit = styled.div`
  width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20;
`;

const CoffeeExitBefore = styled(CoffeeExit)`
  height: 5px;
  top: 5px;
  left: calc(50% - 30px);
`;

const CoffeeExitAfter = styled(CoffeeExit)`
  height: 5px;
  top: 15px;
  left: calc(50% - 30px);
`;

const CoffeeArm = styled.div`
  width: 70px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #231f20;
`;

const CoffeeArmBefore = styled.div`
  width: 15px;
  height: 5px;
  position: absolute;
  top: 7px;
  left: -15px;
  background-color: #9e9495;
`;

const CoffeeCup = styled.div`
  width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #fff;
  border-radius: 0 0 70px 70px / 0 0 110px 110px;
`;

const CoffeeCupAfter = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: -13px;
  border: 5px solid #fff;
  border-radius: 50%;
`;

const keyframesLiquid = keyframes`
  0% { height: 0px; opacity: 1; }
  5% { height: 0px; opacity: 1; }
  20% { height: 62px; opacity: 1; }
  95% { height: 62px; opacity: 1; }
  100% { height: 62px; opacity: 0; }
`;

const CoffeeLiquid = styled.div`
  width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: ${keyframesLiquid} 4s 4s linear infinite;
`;

const keyframesSmokeOne = keyframes`
  0% { bottom: 20px; opacity: 0; }
  40% { bottom: 50px; opacity: 0.5; }
  80% { bottom: 80px; opacity: 0.3; }
  100% { bottom: 80px; opacity: 0; }
`;

const keyframesSmokeTwo = keyframes`
  0% { bottom: 40px; opacity: 0; }
  40% { bottom: 70px; opacity: 0.5; }
  80% { bottom: 80px; opacity: 0.3; }
  100% { bottom: 80px; opacity: 0; }
`;

const CoffeeSmoke = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #e3dada;
`;

const CoffeeSmokeOne = styled(CoffeeSmoke)`
  opacity: 0;
  bottom: 50px;
  left: 102px;
  animation: ${keyframesSmokeOne} 3s 4s linear infinite;
`;

const CoffeeSmokeTwo = styled(CoffeeSmoke)`
  opacity: 0;
  bottom: 70px;
  left: 118px;
  animation: ${keyframesSmokeTwo} 3s 5s linear infinite;
`;

const CoffeeSmokeThree = styled(CoffeeSmoke)`
  opacity: 0;
  bottom: 65px;
  right: 118px;
  animation: ${keyframesSmokeTwo} 3s 6s linear infinite;
`;

const CoffeeSmokeFour = styled(CoffeeSmoke)`
  opacity: 0;
  bottom: 50px;
  right: 102px;
  animation: ${keyframesSmokeOne} 3s 5s linear infinite;
`;

const CoffeeFooter = styled.div`
  width: 95%;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 47.5%);
  background-color: brown;
  border-radius: 10px;
`;

const CoffeeFooterAfter = styled.div`
  width: 106%;
  height: 26px;
  position: absolute;
  bottom: 0px;
  left: -8px;
  background-color: #000;
`;
const CoffeeTap = styled.div`
  width: 49px;
    height: 30px;
    position: absolute;
    top: 20px;
    left: calc(50% - 22px);
    background-color: #231f20;
    border-radius:0 0 10px 10px;
`;

const CoffeeTapNozzle = styled.div`
  width: 10px;
    height: 10px;
    position: absolute;
    bottom: -10px;
    left: calc(50% - 7px);
    background-color: #231f20;
    border-radius: 0%;
`;
const CardsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Card = styled.div`
  width: 240px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
`;

const LearnMoreButton = styled.button`
  align-self: flex-start;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #41bdad;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #349f90;
  }
`;


function PremiumBeans() {
  const beans = [
    {
      id: 1,
      title: "Arabica Bliss",
      description: "A smooth, aromatic blend with a hint of chocolate.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Robusta Roast",
      description: "Bold, rich flavor with high caffeine content.",
      image: "https://images.pexels.com/photos/1556665/pexels-photo-1556665.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Espresso Elite",
      description: "Intense and full-bodied, perfect for espresso lovers.",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Colombian Charm",
      description: "A bright, fruity coffee from the hills of Colombia.",
      image: "https://images.pexels.com/photos/4109748/pexels-photo-4109748.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <Loader >
      <CardsContainer>
        {/* Left cards */}
        <CardColumn>
          {beans.slice(0, 2).map((bean) => (
            <Card key={bean.id}>
              <CardImage style={{ backgroundImage: `url(${bean.image})` }} />
              <CardContent>
                <CardTitle>{bean.title}</CardTitle>
                <CardDescription>{bean.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardColumn>
    <Container>
      <CoffeeHeader>
        <CoffeeButtonOne />
        <CoffeeButtonTwo />
        <CoffeeDisplay />
        <CoffeeDetails />
      </CoffeeHeader>
      <CoffeeMedium>
        <CoffeeExitBefore />
        <CoffeeExit />
        <CoffeeExitAfter />
        <CoffeeArm>
          <CoffeeArmBefore />
        </CoffeeArm>
        <CoffeeLiquid />
        <CoffeeSmokeOne />
        <CoffeeSmokeTwo />
        <CoffeeSmokeThree />
        <CoffeeSmokeFour />
        <CoffeeCup>
          <CoffeeCupAfter />
        </CoffeeCup>
        {/* Adding the tap */}
        <CoffeeTap>
          <CoffeeTapNozzle />
        </CoffeeTap>
      </CoffeeMedium>
      <CoffeeFooter />
      <CoffeeFooterAfter />
    </Container>
    <CardColumn>
          {beans.slice(2).map((bean) => (
            <Card key={bean.id}>
              <CardImage style={{ backgroundImage: `url(${bean.image})` }} />
              <CardContent>
                <CardTitle>{bean.title}</CardTitle>
                <CardDescription>{bean.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardColumn>
      </CardsContainer>
    </Loader>
  );
}

export default PremiumBeans;
