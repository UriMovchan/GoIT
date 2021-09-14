import { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
            <TransitionGroup className="todo-list">
              {this.renderContact() &&
                this.renderContact().map((i) => (
                  <CSSTransition key={i.id} timeout={500} classNames="item">
                    <ContactItem>
                      {i.name}: {i.number}
                      <DelBtn
                        type="button"
                        onClick={() => deleteContactHandler(i.id)}
                      >
                        <img src={minus} alt="delete" />
                      </DelBtn>
                    </ContactItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ul>
        </Form>
      </Content>
    );
  }
}
