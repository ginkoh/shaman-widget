// React.
import React, { useRef, useCallback } from "react";

// Redux.
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from '../constants/actionTypes';

// Third party.
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils.
import { CenteredFlexRow } from "../utils/globals";
import { WHITE, LIGHT_GREEN } from "../constants/colors";

// Custom Containers.
import ShamanConversations from "./ShamanConversations";

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

function ShamanLauncher() {
  const shamanLauncherRef = useRef();

  const { isVisible } = useSelector(state => state.conversations);
  const dispatch = useDispatch();
  const setChatVisible = useCallback(() => dispatch({ type: TYPES.SET_CHAT_VISIBLE }), [dispatch]);

  function handleChatVisible() {
    shamanLauncherRef.current.style.transition = 'opacity 1s ease-out';
    //  console.log('ops', shamanLauncherRef.current.style)
    setChatVisible();
  }

  return !isVisible ? (
    <StyledLauncher onClick={handleChatVisible} ref={shamanLauncherRef} style={{ transition: 'opacity 1s ease-out' }}>
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

export default ShamanLauncher;