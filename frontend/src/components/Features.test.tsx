import { render, screen } from '@testing-library/react'
import Features from './Features'

describe('Features section', () => {
  it('renders all feature cards', () => {
    render(<Features />)

    const featureHeadings = screen.getAllByRole('heading', { level: 3 })

    expect(featureHeadings).toHaveLength(3)
  })
})