import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  pullFormData = data => {
    const nameExists = this.state.contacts.some(
      it => it.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameExists) {
      Notify.warning(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteItem = deletedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(it =>
      it.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.pullFormData} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onSearchInput={this.handleInputChange} />
          <ContactsList
            contacts={filteredContacts}
            onClickDelete={this.deleteItem}
          />
        </Section>
      </div>
    );
  }
}

export default App;
