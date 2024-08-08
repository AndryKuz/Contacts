import { useParams } from "react-router-dom";
import Button, { nameButton } from "../../common/Button/Button";
import { useContacts } from "../../data/contactSlice";
import InfoPerson from "../InfoPerson/InfoPerson";
import Tags from "../Tags/Tags";

import style from "./Contact.module.scss";
const Contact = () => {
  const buttonDate = nameButton.find((item) => item.id === 2);

  const contact = useContacts();
  const { id } = useParams();
  const item = contact.find((element) => element.id === id);



  return (
    <div className={style.contact}>
      <InfoPerson contact={item} />
      <h4>Tags</h4>
      <Tags/>
      <input placeholder="Add new Tag" />
      <Button name={buttonDate.name} />
    </div>
  );
};

export default Contact;
