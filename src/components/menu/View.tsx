import React from 'react'
import { StyledMenu } from './styles'

const View = ({ open }: { open: boolean }) => {
  return (
    <StyledMenu open={open}>
      <a href="#community">Community</a>
      <a href="#members">Members</a>
      <a href="/">Join us</a>
      <a href="#wemeetfor">We Meet For</a>
      <a href="#gallery">Gallery</a>
    </StyledMenu>
  )
}
export default View
