import React from 'react'
import { StyledBurger } from './styles'

export type Props = {
  open: boolean
  setOpen: (isOpen: boolean) => void
}

const View = ({ open, setOpen }: Props) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default View
