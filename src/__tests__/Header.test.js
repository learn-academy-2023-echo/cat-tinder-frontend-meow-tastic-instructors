import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header'
import catLogo from "../assets/cat-logo.png"

describe("<Header />", () => {
  it("has an image", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute("src", catLogo)
  })
})