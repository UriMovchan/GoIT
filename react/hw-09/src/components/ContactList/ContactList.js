import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import minus from "img/minus.svg";
import Content from "components/styled/Content";
import Form from "components/styled/Form";
import Filter from "components/Filter/Filter";
import ContactItem from "components/styled/ContactItem";
import DelBtn from "components/styled/DelBtn";

import { deleteContact, getContacts } from "redux/contacts/contactActions";
import { useEffect, useState } from "react";

import { selectToken, selectContacts } from "redux/contacts/contactsSelector";

const ContactsList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const token = useSelector(selectToken);
  const contactsData = useSelector(selectContacts);

  const renderContact = (() => {
    if (filter) {
      return contactsData.filter(i =>
        i.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return contactsData;
  })();

  const deleteContactHandler = id => {
    dispatch(deleteContact({ token, id }));
  };

  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch, token]);

  return (
    <Content>
      <Form>
        <h2 className="formTitle">Contact List</h2>
        {contactsData.length > 0 ? (
          <div>
            <Filter setFilter={setFilter} />

            <ul className="contactList">
              {renderContact.length > 0 ? (
                <TransitionGroup className="todo-list">
                  {renderContact.map(i => (
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
