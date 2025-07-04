import { useState } from "react";
import Form from "../components/Form/Index";
import Table from "../components/Table/Index";
import type { Contact } from "../schemas/Contact";

type Props = {};

const CMS = (props: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) =>
    setContacts([
      {
        ...contact,
        id: Math.random().toString(),
      },
      ...contacts,
    ]);

  const deleteContact = (id: string) =>
    setContacts(contacts.filter((c) => c.id != id));
  return (
    <div className="container-fluid bg-container-fluid-custom vh-100 pt-5">
      <div className="container bg-container-custom">
        <h1 className="text-center text-white fw-light fs-3">
          Contact manager system
        </h1>

        <div className="row">
          <Form onSubmit={addContact}></Form>
        </div>
        <div className="row mt-5 px-2">
          <Table contacts={contacts} onClick={deleteContact}></Table>
        </div>
      </div>
    </div>
  );
};

export default CMS;
