import style from './HeaderStaff.module.scss';

function HeaderStaff() {

    return (
        <header className={style.headerContainer}>
            <img className={style.headerPizza} src='../svg/pizza.svg'></img>
            <h1 className={style.headerTitle}>Valhalla</h1>
        </header>
    )
};

export default HeaderStaff;