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
import ShamanMainApplication from "./ShamanMainApplication";

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

const OpenableLauncher = ({
  isVisible,
  handleChatVisible,
  shamanLauncherRef
}) => (
  <StyledLauncher
    onClick={handleChatVisible}
    ref={shamanLauncherRef}
    style={{ transition: "opacity 1s ease-out" }}
  >
    <FontAwesomeIcon
      icon={isVisible ? "times" : "comments"}
      style={{
        color: WHITE
      }}
    ></FontAwesomeIcon>
  </StyledLauncher>
);

function ShamanLauncher({
  // Connected props.
  isVisible,

  // Regular props.
  responsiveMode,

  // Dispatchers.
  setChatVisible
}) {
  const shamanLauncherRef = useRef();

  function handleChatVisible() {
    shamanLauncherRef.current.style.transition = "opacity 1s ease-out";
    //  console.log('ops', shamanLauncherRef.current.style)
    setChatVisible();
  }

  return !isVisible ? (
    <OpenableLauncher
      isVisible={isVisible}
      handleChatVisible={handleChatVisible}
      shamanLauncherRef={shamanLauncherRef}
    />
  ) : (
    <React.Fragment>
      <OpenableLauncher
        isVisible={isVisible}
        handleChatVisible={handleChatVisible}
        shamanLauncherRef={shamanLauncherRef}
      />
      <ShamanMainApplication responsiveMode={responsiveMode} />
    </React.Fragment>
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
