import style from "./Card.module.scss";

import Cancel from "../../assets/images/cancel.svg";
import InfoPerson from "../InfoPerson/InfoPerson";
import Tags from "../Tags/Tags";

const Card = () => {
  return (
    
    <div className={style.cardItem}>
      <div className={style.info}>
        <InfoPerson />
      </div>
      <div className={style.remove}>
        <img src={Cancel} alt="cancel" />
      </div>
      <div className={style.tags}>
        <Tags />
      </div>
    </div>
  );
};

export default Card;
