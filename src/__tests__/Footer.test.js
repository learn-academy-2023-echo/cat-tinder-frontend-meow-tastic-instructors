import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("has a copyright", () => {
    // arrange
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    // debug
    screen.logTestingPlaygroundURL()
    // act
    const footer = screen.getByText(/© learn instructors!/i)
    expect(footer).toBeInTheDocument()
  })
})