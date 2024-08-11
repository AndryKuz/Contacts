import PropTypes from 'prop-types';

import style from "./Card.module.scss";

import Cancel from "../../assets/images/cancel.svg";
import InfoPerson from "../InfoPerson/InfoPerson";
import Tags from "../Tags/Tags";
import { useDispatch } from 'react-redux';
import { removeContact } from '../../data/contactSlice';

const Card = ({ contact }) => {
  
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeContact(id));
  }
console.log(contact);
  return (
    
    <div className={style.cardItem}>
      <div className={style.info}>
        <InfoPerson contactInfo={contact}/>
      </div>
      <div className={style.remove} onClick={() => removeItem(contact.id)}>
        <img src={Cancel} alt="cancel" />
      </div>
      <div className={style.tags}>
        <Tags contact={contact}/>
      </div>
    </div>
  );
};
Card.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
