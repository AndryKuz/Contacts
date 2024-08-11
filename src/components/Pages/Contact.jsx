import { Link, useParams } from "react-router-dom";
import Button, { nameButton } from "../../common/Button/Button";
import { useContacts } from "../../data/contactSlice";
import InfoPerson from "../InfoPerson/InfoPerson";
import Tags from "../Tags/Tags";
import { IoArrowBack } from "react-icons/io5";
import style from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTagToContact } from "../../data/addTagToContact";
import { useEffect, useState } from "react";
const Contact = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const buttonDate = nameButton.find((item) => item.id === 2);
  const contactInfo = useContacts();
  const { id } = useParams();
  const item = contactInfo.find((element) => element.id === id);

  const [tags, setTags] = useState(item?.tags || []);

  const onSubmit = (data) => {
    const { newTag } = data;
    dispatch(addTagToContact({ id, tag: newTag }));

    setTags((prevTags) => [...prevTags, newTag]);

    reset();
  };

  useEffect(() => {
    setTags(item?.tags || []);
  }, [item]);
  console.log(tags);
  console.log(contactInfo);

  return (
    <div className={style.contact}>
      <div className={style.headInfo}>
        <InfoPerson contactInfo={item} />
        <Link to="/">
          <div className={style.tooltipParent}>
            <IoArrowBack />
            <div>Back</div>
          </div>
        </Link>
      </div>
      <h4>Tags</h4>
      <Tags contact={{ ...item, tags }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("newTag", {
            maxLength: { value: 20, message: "Max length: 20" },
          })}
          placeholder="Add new Tag"
          autoComplete="off"
        />
        <div className={style.errorMessage}>
          {errors?.newTag && (
            <div>
              <span>{errors?.newTag.message || "Error!"}</span>
            </div>
          )}
        </div>
        <Button name={buttonDate.name} />
      </form>
    </div>
  );
};

export default Contact;
