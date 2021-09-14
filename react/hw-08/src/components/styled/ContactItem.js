import styled from "styled-components";

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export default ContactItem;
