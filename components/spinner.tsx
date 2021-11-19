import styles from '../styles/Spinner.module.scss'
export const Spinner = () => {
    return (
        <div>
            <div className={styles.loader}></div>
            <div className={styles.loader_text}>Загрузка</div>
        </div>
    )
}