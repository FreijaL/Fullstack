import style from './LoginField.module.scss';


function LoginField({title, type}) {

    return(
        <section className={style.loginFieldContainer}>
            <label htmlFor="username">{title}</label>
            <input className={style.inputField} type={type} />
        </section>
        
    )
};

export default LoginField;