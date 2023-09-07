import { render, screen } from '@testing-library/react';
import CatShow from '../pages/CatShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockCats from '../mockCats';

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
      <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it ("renders what the cat enjoys", () => {
    renderShow()
    const catEnjoys = screen.getByText(`${mockCats[0].name} likes ${mockCats[0].enjoys}`)
    expect(catEnjoys).toBeInTheDocument()
  })

})