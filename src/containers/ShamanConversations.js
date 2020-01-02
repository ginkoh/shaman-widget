// React.
import React from "react";

// Redux.
import { connect } from "react-redux";

// Styled Components.
import styled from "styled-components";

// Custom Components.
import ConversationsHeader from "../components/conversations/ConversationsHeader";
import ShamanChat from "./ShamanChat";

const ConversationsContainer = styled.div`
  position: fixed;
  fonts-size: 1.75rem;

  bottom: 40px;
  right: 50px;

  height: 600px;
  width: 400px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 46px 0px !important;

  // TODO: Fix landscape mode on mobile.
  @media screen and (max-width: 600px) and (orientation: portrait) {
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    bottom: 0;
    right: 0;
  }
`;

function ShamanConversations() {
  console.log('epa')
  return (
    <ConversationsContainer>
      <ConversationsHeader></ConversationsHeader>
      <h2>Aha</h2>
      <ShamanChat />
      <input type="button" value="Start new Conversation" />
    </ConversationsContainer>
  );
}

export default ShamanConversations;
