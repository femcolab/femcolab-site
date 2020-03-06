import React from 'react'
import { StyledMenu } from './styles'

const View = ({ open }: { open: boolean }) => {
  return (
    <StyledMenu open={open}>
      <a href="#community">Community</a>
      <a href="#members">Members</a>
      <a href="#gallery">Gallery</a>
      <a href="/join">Join</a>
    </StyledMenu>
  )
}
export default View
