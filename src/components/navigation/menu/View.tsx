import React from 'react'
import { StyledMenu, StyledLink } from './styles'
import { BurgerMenuProps } from '../types'

const View = ({ open, setOpen }: BurgerMenuProps) => {
  return (
    <StyledMenu open={open}>
      <StyledLink href="#community" onClick={() => setOpen(!open)}>
        Community
      </StyledLink>
      <StyledLink href="#members" onClick={() => setOpen(!open)}>
        Members
      </StyledLink>
      <StyledLink href="#gallery" onClick={() => setOpen(!open)}>
        Gallery
      </StyledLink>
      <StyledLink href="/join" onClick={() => setOpen(!open)}>
        Join
      </StyledLink>
    </StyledMenu>
  )
}

export default View
