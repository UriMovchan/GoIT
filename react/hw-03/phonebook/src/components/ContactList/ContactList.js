import { Component } from "react";

import minus from "img/minus.svg";
import Content from "components/styled/Content";
import Form from "components/styled/Form";
import DelBtn from "components/styled/DelBtn";
import ContactItem from "components/styled/ContactItem";
import { Filter } from "components/Filter";

export class ContactsList extends Component {
  renderContact = () => {
    let { filter, contacts } = this.props.state;

    if (filter) {
      contacts = contacts.filter((i) =>
        i.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  render() {
    const { filterContactHandler, deleteContactHandler } = this.props;

    return (
      <Content>
        <Form>
          <h2 className="formTitle">Contact List</h2>
          <Filter filterContact={filterContactHandler} />

          <ul className="contactList">
            {this.renderContact() &&
              this.renderContact().map((i) => (
                <ContactItem key={i.id}>
                  {i.name}: {i.number}
                  <DelBtn
                    type="button"
                    onClick={() => deleteContactHandler(i.id)}
                  >
                    <img src={minus} alt="delete" />
                  </DelBtn>
                </ContactItem>
              ))}
          </ul>
        </Form>
      </Content>
    );
  }
}
