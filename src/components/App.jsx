import styled from '@emotion/styled'
import React from "react";
import Phonebook from "./Phonebook";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList";
import Filter from "./Filter";

export class App extends React.Component {

    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: ''
    }


    formSubmitHandler = data => {
      const addContact = {
        id: nanoid(2),
        ...data
      }

      const isFindCopyContact = this.state.contacts.find(
        element => element.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      );
      if (isFindCopyContact){
        return alert(`${data.name} is already in your contact`)
      };

      this.setState(prevState => (
        {
          contacts: [addContact, ...prevState.contacts],
        }
      ))
    }

    changeFilter = (e) => {
      this.setState({filter: e.currentTarget.value});
    }

    getVisibleFilter = () => {
      const {filter , contacts} = this.state;
      const normalizeFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter),
      );
    }

    deleteContact = (contactId) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }))
    }

 


  render () {
    const {filter} = this.state;

    const visibleFilter = this.getVisibleFilter();
    return (
              <Container>
                <Phonebook 
                    onSubmit = {this.formSubmitHandler}/>
                <h2>Contacts</h2>
                  <Filter 
                    value={filter} onChange={this.changeFilter}/>
                  <ContactList  
                    visibleFilter={visibleFilter}
                    onDeleteContact={this.deleteContact}
                    />
              </Container>

  );
};
}




/////////////////////////////// STYLE /////////////////////////

const Container = styled.div`
  padding: 50px;
  border: 1px solid;
  width: 400px;
`

