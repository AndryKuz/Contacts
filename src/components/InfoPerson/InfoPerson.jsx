import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./InfoPerson.module.scss";
import Avatar from "../../assets/images/avatar.svg";

const InfoPerson = ({ contact }) => {


  return (
    <>
      {!contact ? (
        <div>Информация о контакте недоступна</div>
      ) : (
        <div className={style.cardInfo}>
          <div className={style.avatar}>
            <Link to={`/contact/${contact.id}`}>
              <img src={Avatar} alt="avatar" />
            </Link>
          </div>
          <div className={style.info}>
            <span>{contact.firstName}</span> <span>{contact.lastName}</span>
            <p>{contact.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

InfoPerson.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
export default InfoPerson;
