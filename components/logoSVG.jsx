import styles from './../styles/logoSvg.module.scss'

export const LogoSVG = () => {
    return (
        <div className={styles.logo}>
            <svg className={styles.text} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.339844 14V0H3.55984V11.24H7.25984V4H10.4798V11.24H14.1998V0H17.3998V14H0.339844Z" fill="white"/>
            </svg>
        </div>
    )
}