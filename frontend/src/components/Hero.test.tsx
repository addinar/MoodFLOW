import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders main headline', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /track your mood/i })
    ).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
  render(<Hero />)

  expect(screen.getByRole('button', { name: /start tracking free/i })).toBeEnabled()
  expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
})
})