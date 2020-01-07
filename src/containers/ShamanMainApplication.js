// React.
import React from "react";

// Redux.
import { connect } from "react-redux";

// Styled Components.
import styled from "styled-components";

// Custom Components.
import ConversationsHeader from "../components/conversations/ConversationsHeader";
import ShamanChat from "./ShamanChat";
import ConversationsListBody from "../components/conversations/ConversationsListBody";
import ConversationsFooter from "../components/conversations/ConversationsFooter";
import Conversations from "../components/conversations/Conversations";
import { setAppStage } from "../actions";
import { possibleStates } from "../constants/app";

const ShamanBox = styled.div`
  position: fixed;
  fonts-size: 1.75rem;

  bottom: 120px;
  right: 50px;

  height: 600px;
  width: 400px;

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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

function Stage({
  // Connected props.
  currentStage,

  // Actions.
  setAppStage
}) {

  console.log(currentStage.stageName);
  if (currentStage.stageName === "lobby") {
    return <Conversations setAppStage={setAppStage} />;
  } else if (currentStage.stageName === "privateChat") {
    return (
      <ul>
        <button onClick={() => setAppStage(possibleStates.lobby)}>Back</button>
        <li>Private chat</li>
      </ul>
    );
  } else {
    return (
      <ul>
        <button onClick={() => setAppStage(possibleStates.lobby)}>Back</button>
        <li>Default Component</li>
      </ul>
    );
  }
}

function ShamanMainApplication({
  // Connected props.
  currentStage,

  // Regular props.
  responsiveMode,

  // Actions.
  setAppStage
}) {
  return (
    <ShamanBox>
      <Stage currentStage={currentStage} setAppStage={setAppStage}></Stage>
    </ShamanBox>
  );
}

export const mapStateToProps = ({ appStages }) => {
  return {
    currentStage: appStages.currentStage
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setAppStage: stage => dispatch(setAppStage(stage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShamanMainApplication);
