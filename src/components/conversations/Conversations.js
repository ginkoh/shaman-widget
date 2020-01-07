// React.
import React from "react";

// Redux.
import { connect } from "react-redux";

// Styled Components.
import styled from "styled-components";

// Custom Components.
import ConversationsHeader from "./ConversationsHeader";
import ConversationsListBody from "./ConversationsListBody";
import ConversationsFooter from "./ConversationsFooter";

// TODO: The conversations is a component and can be reused in many places.
function Conversations({
  // Regular props.
  responsiveMode,

  // Actions.
  setAppStage
}) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ConversationsHeader
        responsiveMode={responsiveMode}
      ></ConversationsHeader>
      <ConversationsListBody setAppStage={setAppStage}></ConversationsListBody>
      <ConversationsFooter></ConversationsFooter>
    </div>
  );
}

export default connect(
  () => ({}),
  () => ({})
)(Conversations);
