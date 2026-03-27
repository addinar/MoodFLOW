import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

jest.mock('../../lib/firebase', () => ({
  auth: {},
  db: {},
}));


describe('Home page', () => {

  it('renders without crashing', () => {
    const { container } = render(<Page />)
    expect(container).toBeTruthy()
  })

  it('renders the hero headline', () => {
    render(<Page />)

    expect(
      screen.getByRole('heading', { name: /track your mood/i })
    ).toBeInTheDocument()
  })

})