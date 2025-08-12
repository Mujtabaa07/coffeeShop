import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 20px;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

const FavoritesTitle = styled.h1`
  text-align: center;
  color: #8B4513;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: "Playfair Display", serif;
`;

const EmptyFavorites = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 15px;
  margin-top: 40px;
  
  p {
    font-size: 1.2rem;
    color: #8B4513;
    margin: 10px 0;
  }
  
  .browse-btn {
    display: inline-block;
    background: #8B4513;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 20px;
    transition: background 0.3s ease;
    
    &:hover {
      background: #654321;
    }
  }
`;

const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const FavoriteCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
    border-color: #8B4513;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  
  h3 {
    color: #8B4513;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-family: "Playfair Display", serif;
  }
  
  .price {
    font-size: 1.1rem;
    font-weight: bold;
    color: #D2691E;
    margin-bottom: 15px;
  }
  
  .remove-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
    width: 100%;
    
    &:hover {
      background: #c82333;
    }
  }
`;

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
        
        // Listen for favorites updates
        const handleFavoritesUpdate = () => {
            loadFavorites();
        };
        
        window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
        
        return () => {
            window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
        };
    }, []);

    const loadFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(favorites);
    };

    const removeFromFavorites = (itemId) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const updatedFavorites = favorites.filter(fav => fav.id !== itemId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        loadFavorites();
        // Trigger update event
        window.dispatchEvent(new CustomEvent('favoritesUpdated'));
    };

    if (favorites.length === 0) {
        return (
            <FavoritesContainer>
                <FavoritesTitle>My Favorite Items</FavoritesTitle>
                <EmptyFavorites>
                    <p>💔 No favorites yet!</p>
                    <p>Start browsing and heart items you love.</p>
                    <a href="./shop" className="browse-btn">Browse Products</a>
                </EmptyFavorites>
            </FavoritesContainer>
        );
    }

    return (
        <FavoritesContainer>
            <FavoritesTitle>My Favorite Items ({favorites.length})</FavoritesTitle>
            <FavoritesGrid>
                {favorites.map(item => (
                    <FavoriteCard key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="price">₹{item.price}</p>
                        <button 
                            className="remove-btn"
                            onClick={() => removeFromFavorites(item.id)}
                        >
                            💔 Remove from Favorites
                        </button>
                    </FavoriteCard>
                ))}
            </FavoritesGrid>
        </FavoritesContainer>
    );
}

export default Favorites;
