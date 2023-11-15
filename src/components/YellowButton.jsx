import style from './YellowButton.module.scss';

function YellowButton({title, action}) {

    return(
        <button className={style.yellowButton}>{title}</button>
    )
};

export default YellowButton;