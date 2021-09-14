import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import minus from "img/minus.svg";
import Content from "components/styled/Content";
import Form from "components/styled/Form";
import Filter from "components/Filter/Filter";
import ContactItem from "components/styled/ContactItem";
import DelBtn from "components/styled/DelBtn";

import { deleteContact } from "redux/contacts/contactActions";

const ContactsList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector((state) => state);

  const renderContact = (() => {
    if (filter) {
      return contacts.filter((i) =>
        i.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return contacts;
  })();

  const deleteContactHandler = (who) => {
    dispatch(deleteContact(contacts.filter((i) => i.id !== who)));
  };

  return (
    <Content>
      <Form>
        <h2 className="formTitle">Contact List</h2>
        {contacts.length > 0 ? (
          <div>
            <Filter />

            <ul className="contactList">
              {renderContact.length > 0 ? (
                <TransitionGroup className="todo-list">
                  {renderContact.map((i) => (
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
              ) : (
                <div className="todo-list">Not found</div>
              )}
            </ul>
          </div>
        ) : (
          <div>U have no contacts yet</div>
        )}
      </Form>
    </Content>
  );
};

export default ContactsList;
