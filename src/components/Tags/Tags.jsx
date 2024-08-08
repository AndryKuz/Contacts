import style from "./Tags.module.scss";

const Tags = ({ contact }) => {
  const tags = contact && Array.isArray(contact.tags) ? contact.tags : [];
  return (
    <div className={style.tags}>
      {tags?.map((item, index) => (
        <div className={style.tag} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tags;
