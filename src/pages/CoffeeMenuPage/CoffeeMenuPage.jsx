import React from 'react';
import styles from './CoffeeMenu.module.css'; // Importing CSS as a module

const CoffeeMenu = () => {
  return (
    <div className={styles.menu}>
      <header>
        <h1>Cotton Club</h1>
        <p className={styles.established}>Est. 2024</p>
      </header>
      <hr />
      <main>
        <section>
          <h2>Food Menu</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Item</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Chicken Lolipop</p><p className={styles.price}>260</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Chicken Tikka</p><p className={styles.price}>220</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Tandoori Prawn</p><p className={styles.price}>320</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Mutton Seekh Kebab</p><p className={styles.price}>320</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Gyoza</p><p className={styles.price}>220</p>
          </div>
          {/* Repeat for each item */}
        </section>
      </main>
      <hr className={styles.bottomLine} />
      <footer>
        <p className={styles.address}>Enjoy your time at <b className={styles.footerBold} >Cotton Club</b> ^^</p>
      </footer>
    </div>
  );
}

export default CoffeeMenu;
