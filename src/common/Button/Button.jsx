import style from './Button.module.scss';

export const nameButton = [
    {id:1, name:'Add Contact'},
    {id:2, name:'Add Tag'}
];

const Button =  ({name}) => {
return (
    <button className={style.button}>{name}</button>
)
}

export default Button;