import styles from '@Styles/_error.module.scss'

export default function Custom404() {
  return (
    <>
      <div className={styles["ErrorPage"]}>
        <h1>
          Oh no, 404 Error
        </h1>
        <h3>
          (Not Found)
        </h3>
      </div>
    </>
  )
}