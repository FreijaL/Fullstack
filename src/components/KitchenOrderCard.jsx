import style from './KitchenOrderCard.module.scss';

function KitchenOrderCard() {

    return(
        <section className={style.kitchenOrderCardContainer}>
            <p className={style.kitchenOrderCardSpecifics + ' ' + style.gridOne}>#Ordernr</p>
            <p className={style.kitchenOrderCardSpecifics + ' ' + style.gridTwo}>-10</p>
            <ul className={style.kitchenOrderCardSpecifics + ' ' + style.gridThree}>
                <li>Vesuvio</li>
                <li>Calzone</li>
            </ul>
            <img className={style.kitchenOrderCardSpecifics + ' ' + style.kitchenOrderCardSvg + ' ' + style.gridFour} src='../svg/check.svg' alt='check-marker' />
        </section>
    )
};

export default KitchenOrderCard;