import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../componets/Button'; // Corrected import statement

const ProfileContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  margin-top: 4rem;
`;

const ProfileInfo = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const OrderHistory = styled(motion.div)`
  margin-top: 2rem;
`;

const Order = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

function Profile() {
  const user = useSelector((state) => state.auth.user);

  // Mock order history data
  const orderHistory = [
    { id: 1, date: '2023-05-01', total: 15.99 },
    { id: 2, date: '2023-05-15', total: 24.99 },
    { id: 3, date: '2023-05-30', total: 19.99 },
  ];

  return (
    <ProfileContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Profile
      </Title>
      <ProfileInfo
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <InfoItem>
          <Label>Name:</Label>
          {user?.username || 'N/A'}
        </InfoItem>
        <InfoItem>
          <Label>Email:</Label>
          {user?.email || 'N/A'}
        </InfoItem>
        <Button primary>Edit Profile</Button>
      </ProfileInfo>
      <OrderHistory
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>Order History</h2>
        {orderHistory.map((order) => (
          <Order key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
          </Order>
        ))}
      </OrderHistory>
    </ProfileContainer>
  );
}

export default Profile;
