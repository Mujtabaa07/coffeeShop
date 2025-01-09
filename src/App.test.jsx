import { render, screen } from '@testing-library/react';  
import App from './App.jsx';  

describe('App Component', () => {
  it('renders the hello world text', () => {
    render(<App />);  // Render the component

    
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
