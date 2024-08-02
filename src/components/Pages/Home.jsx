
import Cards from "../Card/Cards";
import Form from "../Form/Form";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Form />
      <Cards/>
    </div>
  );
};

export default Home;
