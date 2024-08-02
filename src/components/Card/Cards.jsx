import Card from "./Card";
import style from "./Card.module.scss";

const Cards = () => {
  return (
    <div className={style.cards}>
        <h3>Contacts</h3>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
