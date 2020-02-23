import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  border: solid 1px blue;
  height: 100vh;
  background: ${({ theme }) => theme.primaryDark};
`

export const TextLogo = styled.img`
  width: 500px;
`

export const Description = styled.div`
  width: 300px;
  align-self: flex-end;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.primaryLight};
    line-height: 2rem;
  }
`
