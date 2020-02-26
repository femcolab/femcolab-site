import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 20% 20% auto [text-end] 20%;
  grid-template-rows: 1.5fr 1fr 1fr 1fr [line-end];
  background: ${({ theme }) => theme.primaryLight};

  h2 {
    grid-column: 3;
    grid-row: 2;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  p {
    grid-column: 3;
    grid-column-end: text-end;
    grid-row: 3;
    line-height: 2rem;
  }
`

export const Line = styled.span`
  grid-column: 2;
  grid-row: 1;
  grid-row-end: line-end;
  margin: -5px 10px -10px 10px;
  border-left: solid 4px ${({ theme }) => theme.primaryPink};
  writing-mode: vertical-lr;
`
