import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import Button, { nameButton } from "../../common/Button/Button";

const Form = () => {
  const buttonData = nameButton.find((item) => item.id === 1);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className={style.formSection}>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input
            {...register("firstName", {
              required: "Required to fill out",
              minLength: { value: 3, message: "Min length: 3" },
              maxLength: { value: 20, message: "Max length: 20" },
            })}
            autoComplete="off"
          />
        </label>
        <div className={style.errorMessage}>
          {errors?.firstName && (
            <div>
              <span>{errors?.firstName.message || "Error!"}</span>
            </div>
          )}
        </div>
        <label>
          Last Name
          <input
            {...register("lastName", {
              required: "Required to fill out",
              minLength: { value: 3, message: "Min length: 3" },
              maxLength: { value: 20, message: "Max length: 20" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Invalid Last Name",
              },
            })}
            autoComplete="off"
          />
        </label>
        <div className={style.errorMessage}>
          {errors?.lastName && (
            <div>
              <span>{errors?.lastName.message || "Error!"}</span>
            </div>
          )}
        </div>
        <label>
          Email
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
        </label>
        <div className={style.errorMessage}>
          {errors?.email && (
            <div>
              <span>{errors?.email.message || "Error!"}</span>
            </div>
          )}
        </div>
        <div className={style.button}>
          <Button name={buttonData.name} />
        </div>
      </form>
    </section>
  );
};

export default Form;
