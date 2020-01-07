// React.
import React from "react";
import { Row, Col, Button } from "antd";
import { LIGHT_GREEN } from "../../constants/colors";

function ConversationsFooter() {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={12}>
          <Button
            type="primary"
            icon="wechat"
            style={{ background: LIGHT_GREEN, borderColor: LIGHT_GREEN }}
          >
            Começar nova conversa
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ConversationsFooter;
