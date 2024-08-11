import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./InfoPerson.module.scss";
import Avatar from "../../assets/images/avatar.svg";


const InfoPerson = ({ contactInfo }) => {
  return (
    <>
      {!contactInfo ? (
        <div>Информация о контакте недоступна</div>
      ) : (
        <Link to={`/contact/${contactInfo.id}`}>
          <div className={style.cardInfo}>
            
            <div className={style.avatar}>
              <img src={Avatar} alt="avatar" />

            </div>
            <div className={style.info}>
              <span>{contactInfo.firstName}</span>{" "}
              <span>{contactInfo.lastName}</span>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

InfoPerson.propTypes = {
  contactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
export default InfoPerson;
