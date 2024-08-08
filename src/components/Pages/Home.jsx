import { useEffect, useState } from "react";
import { useContacts } from "../../data/contactSlice";
import Cards from "../Card/Cards";
import Form from "../Form/Form";

import style from "./Home.module.scss";

const Home = () => {
  const contacts = useContacts();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if(contacts.length === 0) {
      const timer = setTimeout(() => {
        setMessage(true)
      }, 1000)
      return () => clearTimeout(timer);
    } else setMessage(false)
  }, [contacts])

  return (
    <div className={style.home}>
      <div>
        <Form />
      </div>
      {message ? <div className={style.any}>You don't have any contacts yet</div> : <Cards/>}
    </div>
  );
};

export default Home;
