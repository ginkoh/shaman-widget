// React.
import React, { useCallback } from "react";

// Redux.
import { connect, useDispatch, useSelector } from "react-redux";

// Third party.
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils.
import { CenteredFlexRow } from "../../utils/globals";
import { LIGHT_GREEN, WHITE } from "../../constants/colors";
import * as TYPES from '../../constants/actionTypes';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;
  min-height: 60px;

  background: ${LIGHT_GREEN};
  color: ${WHITE}
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 5px;
  }
`;

const CloseButton = styled.div``;

const AgentImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

// TODO: Get site name, description and agents from API.
// Also: Get navigator language and save i18n strings on the server.
function ConversationsHeader({
  agentsList,
}) {
  const dispatch = useDispatch();
  const setChatVisible = useCallback(() => dispatch({ type: TYPES.SET_CHAT_VISIBLE }), [dispatch]);

  agentsList = [
    {
      name: "Gian",
      picture: "https://i.pravatar.cc/50"
    },
    {
      name: "Brendon",
      picture: "https://i.pravatar.cc/51"
    },
    {
      name: "Gian",
      picture: "https://i.pravatar.cc/52"
    },
    {
      name: "Brendon",
      picture: "https://i.pravatar.cc/53"
    },
    {
      name: "Gian",
      picture: "https://i.pravatar.cc/54"
    },
    {
      name: "Brendon",
      picture: "https://i.pravatar.cc/55"
    }
  ];
  return (
    <Container>
      <HeaderContent>
        <div>
          <h1>Site name</h1>
        </div>
        <div>
          <span>Alguma questão? Fale conosco!</span>
        </div>
        <div>
          <span>Agents:</span>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none"
            }}
          >
            {agentsList.slice(0, 5).map((agent, i) => (
              <li key={i} style={{ margin: "5px", cursor: 'pointer' }} onClick={setChatVisible}>
                <AgentImage
                  src={agent.picture}
                  alt={agent.name}
                  title={agent.name}
                />
              </li>
            ))}
            <li>
              <AgentImage src="https://images-na.ssl-images-amazon.com/images/I/412rXWdCJ7L.png"></AgentImage>
            </li>
          </ul>
        </div>
      </HeaderContent>
      <CloseButton onClick={setChatVisible}>
        <FontAwesomeIcon icon="times" size="2x" style={{ cursor: "pointer" }} />
      </CloseButton>
    </Container>
  );
}

export default ConversationsHeader;