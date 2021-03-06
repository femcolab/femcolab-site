import styled from 'styled-components'

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryPurple};
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
`

export const StyledLink = styled.a`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  transition: color 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.primaryPink};
  }
`
