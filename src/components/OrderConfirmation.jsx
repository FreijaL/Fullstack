import style from './OrderConfirmation.module.scss';

function OrderConfirmation({time, orderNr}) {
    return ( 
        <article className={style.thankYouCard}>
            <p className={style.cardTitle}>Tack för din beställning!</p>
            <section className={style.cardTimer}>
                <p>Snart mumsar du i dig pizza, <br/> leverans beräknas om:</p>
                <p>{time}</p>
            </section>
            <p className={style.cardOrderNr}>Order nummer: {orderNr}</p>
        </article>
     );
}

export default OrderConfirmation;