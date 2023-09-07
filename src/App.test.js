import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


describe("<App />", () => {
  it("renders a greeting", () => {
    // Arrange - What is needed to setup the environment I am testing
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.debug()
      // screen.logTestingPlaygroundURL()
    // Act - getting the method I need to pull information
    const greeting = screen.getByText("I am the home page")
    // Assert
    expect(greeting).toBeInTheDocument()
  })

  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {
      name: /i am the home page/i
    })
    expect(heading).toBeInTheDocument()
  })
})