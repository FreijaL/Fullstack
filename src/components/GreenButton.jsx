import style from './GreenButton.module.scss';

function GreenButton({title, action}) {


    return(
        <button className={style.greenButton}>{title}</button>
    )
}

export default GreenButton;