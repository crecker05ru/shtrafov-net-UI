import styles from '../styles/answerFrom.module.scss'
import React, { FC } from "react";

interface Props {
    data : any,
    UIN : any
}

export const AnswerForm : FC<Props> = ({data,UIN}) => {
    return (
        <div className={styles.container}>
            <p className={styles.article}>Постановление # {UIN}</p>
            {console.log('data',data)}
            <div className={styles.grid_container}>
                <div className={styles.div}>Свидетельство о регистрации: </div><div className={styles.div}>{data.number}</div>
                <div className={styles.div}>Дата постановления: </div><div className={styles.div}>{data.bill_at}</div>
                <div className={styles.div}>Нарушение: </div><div className={styles.div}>{data.name}</div>
                <div className={styles.payee_username}>Получатель платежа: </div><div className={styles.payee_username}>{data.payee_username}</div>
                <div className={styles.div}>ИНН: </div><div className={styles.div}>{data.payee_inn}</div>
                <div className={styles.div}>КПП: </div><div className={styles.div}>{data.payee_kpp}</div>
                <div className={styles.div}>Расчетный счет: </div><div className={styles.div}>{data.payee_bank_account}</div>
                <div className={styles.div}>Банк получателя: </div><div className={styles.div}>{data.payee_bank_name}</div>
                <div className={styles.div}>БИК </div><div className={styles.div}>{data.payee_bank_bik}</div>
                <div className={styles.div}>ОКТМО(ОКАТО): </div><div className={styles.div}>{data.payee_oktmo}</div>
                <div className={styles.div}>КБК: </div><div className={styles.div}>{data.kbk}</div>
                <div className={styles.div}>Сумма штрафа: </div><div className={styles.div}>{data.amount}</div>
                <div className={styles.div}>Скидка: </div><div className={styles.div}>{data.discount_at}</div>
                <div className={styles.div}>К оплате: </div><div className={styles.div}>{data.amount_to_pay}</div>
                </div>
        </div>
    )
}