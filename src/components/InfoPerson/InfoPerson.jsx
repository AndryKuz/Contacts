import style from "./InfoPerson.module.scss";
import Avatar from "../../assets/images/avatar.svg";
import { Link } from "react-router-dom";

const InfoPerson = () => {
  return (
    <div className={style.cardInfo}>
      <div className={style.avatar}>
        <Link to="/contact/{id}">
          <img src={Avatar} alt="avatar" />
        </Link>
      </div>
      <div className={style.info}>
        <span>First Name</span> <span>Last Name</span>
        <p>email@email.com</p>
      </div>
    </div>
  );
};

export default InfoPerson;
