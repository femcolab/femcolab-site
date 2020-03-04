import React from 'react'

import {
  Container,
  Emojis,
  WeMeetForBox,
  WeMeetForTitleContainer,
  MembersListContainer,
  WeMeetForList,
} from './styles'

const View = ({ id }: { id: string }) => (
  <Container>
    <Emojis>👩🏽👩🏻👩🏻‍💻</Emojis>
    <WeMeetForTitleContainer>
      <h2>We meet for</h2>
    </WeMeetForTitleContainer>
    <WeMeetForBox>
      <WeMeetForList>
        <p>Study Groups</p>
        <p>Challenges</p>
        <p>Workshops</p>
      </WeMeetForList>
    </WeMeetForBox>
    <MembersListContainer>
      <h2>Members</h2>
      <p>Chloe Kuyers</p>
      <p>Lina Chan</p>
      <p>Duyen Ho</p>
    </MembersListContainer>
  </Container>
)

export default View
