import { dataContacts } from "../../../../utils/dataContacts";
import ContactItem from "../ContactItem/ContactItem";
import style from "./ContactsSection.module.scss";

const ContactsSection = () => {
  const contacts = [...dataContacts];
  const centeredContact = contacts.pop();

  return (
    <div className={style.contact}>
      <div className={style.gridContainer}>
        {contacts.map((item) => (
          <ContactItem
            block={item.size}
            name={item.name}
            post={item.post}
            phone={item.phone}
          />
        ))}
        <div className={style.centeredBlock}>
          <ContactItem
            block={centeredContact.size}
            name={centeredContact.name}
            post={centeredContact.post}
            phone={centeredContact.phone}
          />
        </div>
      </div>
    </div>
  );
};
export default ContactsSection;
