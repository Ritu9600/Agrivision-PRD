import React from "react";
import styles from "./process.module.css";
function Process() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <p className={styles.title}>Registration Process</p>
          <button className={styles.button}>Register Now!</button>
        </div>
        <div className={styles.lower}>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>1</p>
            </span>
            <p className={styles.text}>Log on to www.agrivision4u.com</p>
          </div>

          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>2</p>
            </span>
            <p className={styles.text}>
              Create an account and login to the site.
            </p>
          </div>

          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>3</p>
            </span>
            <p className={styles.text}>
              Fill Talent Hunt online registration form.
            </p>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>4</p>
            </span>
            <p className={styles.text}>You will be registered</p>
          </div>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>5</p>
            </span>
            <p className={styles.text}>
              The exam portal will open on the scheduled date & time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
