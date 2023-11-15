import style from './PaymentInput.module.scss';

function PaymentInput({label}) {
    return ( 
        <>
        <label className={style.paymentLabel} htmlFor="">{label}</label>
        <input className={style.paymentInput} type="text" name="" id="" />
        </>
     );
}

export default PaymentInput;