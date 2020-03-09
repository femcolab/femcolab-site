import React from 'react'
import { StyledBurger } from './styles'
import { BurgerMenuProps } from '../types'

const View = ({ open, setOpen }: BurgerMenuProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default View
