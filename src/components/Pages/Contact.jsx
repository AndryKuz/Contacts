import Button, { nameButton } from "../../common/Button/Button";
import InfoPerson from "../InfoPerson/InfoPerson";
import Tags from "../Tags/Tags";

import style from "./Contact.module.scss";
const Contact = () => {
  const buttonDate = nameButton.find((item) => item.id === 2);
  return (
    <div className={style.contact}>
      <InfoPerson />
      <h4>Tags</h4>
      <Tags />
      <input placeholder="Add new Tag"/>
      <Button name={buttonDate.name} />
    </div>
  );
};

export default Contact;
