import style from "./Card.module.scss";

import Card from "./Card";
import { useContacts, useError, useLoading } from "../../data/contactSlice";

const Cards = () => {

const contacts = useContacts();
const loading = useLoading();
const error = useError();



return (
  <>
   {
    loading ? (
      <p>Loading...</p>
    ) : error ?(
      <p>Error loading contacts.</p>
    ) : (
      <div className={style.cards}>
      <h3>Contacts</h3>
      {contacts.map((item) => (
        <Card key={item.id} contact={item} />
      ))}
    </div>
    )
  }
  </>
 
  
);
};

export default Cards;
