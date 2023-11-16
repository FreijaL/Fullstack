import GreenButton from './GreenButton';
import style from './Payment.module.scss';
import PaymentInput from './PaymentInput';

function Payment({priceTotal}) {
    return ( 
        <article className={style.paymentCard}>
            <h3 className={style.paymentTitle}>Betalningsmetod</h3>
            <ul className={style.paymentOptionList}>
                <li>Swish</li>
                <li>Kort</li>
                <li>Klarna</li>
            </ul>
            <section className={style.paymentInputWrap}>
                <PaymentInput label={'Telefon:'}/>
                <PaymentInput label={'För- och efternamn:'}/>
                <PaymentInput label={'Adress:'}/>
            </section>
            <p className={style.priceTotal} >Totalt: {priceTotal}</p>
            <GreenButton title={"Betala"}/>
        </article>
     );
}

export default Payment;