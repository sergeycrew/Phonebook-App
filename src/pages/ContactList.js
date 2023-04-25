import { Section } from '../components/Section/Section';
import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactsList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contacts = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </HelmetProvider>
  );
};

export default Contacts;
