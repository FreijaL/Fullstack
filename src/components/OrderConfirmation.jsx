import './OrderConfirmation.scss';

function OrderConfirmation({time, orderNr}) {
    return ( 
        <article className='thankYou-card'>
            <p className='thankYou-card__title'>Tack för din beställning!</p>
            <section className='thankYou-card__timer'>
                <p>Snart mumsar du i dig pizza, <br/> leverans beräknas om:</p>
                <p>{time}</p>
            </section>
            <p className='thankYou-card__orderNr'>Order nummer: {orderNr}</p>
        </article>
     );
}

export default OrderConfirmation;