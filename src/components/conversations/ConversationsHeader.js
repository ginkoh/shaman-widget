// React.
import React from "react";

// Redux.
import { connect } from "react-redux";

// Styled Components.
import styled from "styled-components";

// FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Actions.
import { setChatVisible } from "../../actions";

// Constants.
import { LIGHT_GREEN, WHITE } from "../../constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;
  min-height: 60px;

  background: ${LIGHT_GREEN};
  color: ${WHITE};

  margin-bottom: 10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  // Connected props.
  isVisible,

  // Regular props.
  responsiveMode,
  agentsList,

  // Dispatchers.
  setChatVisible
}) {
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
          <h1 style={{ color: "#fff" }}>hotelflow</h1>
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
            {/* {agentsList.slice(0, 5).map((agent, i) => (
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
            </li> */}
          </ul>
        </div>
      </HeaderContent>
      {responsiveMode && (
        <CloseButton onClick={setChatVisible}>
          <FontAwesomeIcon
            icon="times"
            size="2x"
            style={{ cursor: "pointer" }}
          />
        </CloseButton>
      )}
    </Container>
  );
}

const mapStateToProps = ({ conversations }) => {
  return {
    isVisible: conversations.isVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChatVisible: () => dispatch(setChatVisible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsHeader);
