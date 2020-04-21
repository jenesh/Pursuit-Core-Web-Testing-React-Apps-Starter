import React from 'react'
import { render, screen } from '@testing-library/react'
import DonationCard from '../DonationCard'

describe('DonationCard', () => {
  // Render Component
  render(<DonationCard name='test' amount='100' message='Good Luck' />)

  const donated = screen.getByText('test donated $100')
  const parent = donated.parentElement
  
  test('Donation Text', () => {
    expect(donated).toBeInTheDocument()
    expect(msg).toBeInTheDocument()
    expect(donated.tagName).toBe('H5')
    expect(parent.childNodes[0]).toBe(donated)
  })

  const msg = screen.getByText('Good Luck')

  test('Message Text', () => {
    // console.log(msg.textContent)
    expect(msg.textContent).toEqual('Good Luck')
  })
})

