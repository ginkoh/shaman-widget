// React.
import React, { useRef } from "react";

// Redux.
import { connect } from "react-redux";

// Styled Components.
import styled from "styled-components";

// FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils.
import { CenteredFlexRow } from "../utils/globals";

// Constants.
import { WHITE, LIGHT_GREEN } from "../constants/colors";

// Custom Containers.
import ShamanConversations from "./ShamanConversations";

// Actions.
import { setChatVisible } from "../actions";

const StyledLauncher = styled.div`
  position: fixed;

  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 40px;

  font-size: 1.75rem;
  border-radius: 50%;

  ${CenteredFlexRow}

  & > * {
    margin-top: -5px;
  }

  background: ${LIGHT_GREEN};

  &:hover {
    cursor: pointer;
  }
`;

function ShamanLauncher({
  // Connected props.
  isVisible,

  // Dispatchers.
  setChatVisible
}) {
  const shamanLauncherRef = useRef();
  function handleChatVisible() {
    shamanLauncherRef.current.style.transition = 'opacity 1s ease-out';
    //  console.log('ops', shamanLauncherRef.current.style)
    setChatVisible();
  }
  return !isVisible ? (
    <StyledLauncher onClick={handleChatVisible} ref={shamanLauncherRef} style={{transition: 'opacity 1s ease-out'}}>
      <FontAwesomeIcon
        icon="comments"
        size="2x"
        style={{
          color: WHITE
        }}
      ></FontAwesomeIcon>
    </StyledLauncher>
  ) : (
    <ShamanConversations />
  );
}

export default connect(
  // mapStateToPRops.
  ({ conversations }) => ({ isVisible: conversations.isVisible }),
  // mapDispatchToProps.
  dispatch => {
    return {
      setChatVisible: () => dispatch(setChatVisible())
    };
  }
)(ShamanLauncher);
