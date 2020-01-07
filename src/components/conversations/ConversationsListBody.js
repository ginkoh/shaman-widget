// React.
import React from "react";

// Antd.
import { Row, Col, Avatar, Button, Typography } from "antd";

// Styled Components.
import styled from "styled-components";

// Date-fns.
import { format } from "date-fns";
import { possibleStates } from "../../constants/app";

const { Text, Title } = Typography;

const ConversationsListRow = styled(Row)`
  padding: 15px;
  &:hover {
    cursor: pointer;
  }

  ${({ index }) => {
    if (index > 0) {
      return `
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 25px;
                width: calc(100% - 50px) !important;
                border-top: 1px solid #393939 !important;
                opacity: 0.1;
            }
          `;
    }
  }}
`;

// TODO: Use i18n-next for internationalization.
function ConversationsListBody({
  // Actions.
  setAppStage,

  children,
  ...rest
}) {
  // TODO: Get these infos from the server.
  const conversationsArr = [
    {
      operator_name: "cubano bkn",
      operator_profile_picture: "https://i.pravatar.cc/54",
      last_message: {
        message_text_content: "Ow man",
        message_datetime: format(new Date(), "HH:MM:SS")
      },
      uuid: "d925885a-707c-4931-9b5a-ac982fcf7c8d",
    },
    {
      operator_name: "leticia",
      operator_profile_picture: "https://i.pravatar.cc/52",
      last_message: {
        message_text_content: "Hey!!",
        message_datetime: format(new Date(), "HH:MM:SS")
      },
      uuid: "d925885a-707c-4931-9b5a-ac982fcf7c8d",
    }
  ];

  return (
    <div>
      {conversationsArr.map((conversation, i) => {
        return (
          <ConversationsListRow
            key={i}
            index={i}
            onClick={() => setAppStage(possibleStates.privateChat)}
          >
            <Col span={4}>
              <Avatar
                src={conversation.operator_profile_picture}
                size="large"
              />
            </Col>
            <Col span={16}>
              <Row>
                <Col span={24}>
                  <span style={{ fontWeight: "bold" }}>
                    {conversation.operator_name}
                  </span>
                </Col>
                <Col span={24}>
                  <Text type="secondary">{conversation.operator_name}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={4}>
              <Text type="secondary">
                {conversation.last_message.message_datetime.toString()}
              </Text>
            </Col>
          </ConversationsListRow>
        );
      })}
    </div>
  );
}

export default ConversationsListBody;
