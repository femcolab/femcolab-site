import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  min-height: 400px;
`

export const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

export const ImageWrapper = styled.div`
  display: inline-block;
  margin: 0 2rem 2rem 0;
  width: 25%;
  height: auto;
  background-color: mistyrose;

  :last-child {
    margin-right: 0;
  }
`
