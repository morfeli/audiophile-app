import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles/Checkout.module.scss";

const Checkout = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  const eMoneyIsSelected = (
    <div>
      <label htmlFor="e-moneyNum" />
      <input
        type="number"
        id="e-moneyNum"
        name="e-moneyNum"
        placeholder="e-Money Number"
      />
      <label htmlFor="e-moneyPin" />
      <input
        type="number"
        id="e-moneyPin"
        name="e-moneyPin"
        placeholder="e-Money Pin"
      />
    </div>
  );
  return (
    <section className={styles.section}>
      <button onClick={goBackHandler}>Go Back</button>
      <div className={styles.formBox}>
        <h1>CHECKOUT</h1>
        <form>
          <div>
            <h3>Billing Details</h3>
            <label htmlFor="firstName" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <label htmlFor="lastName" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="phoneNumber" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Yo Digits"
            />
          </div>
          <div>
            <h3>Shipping Info</h3>
            <label htmlFor="address" />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Yo Address"
            />
            <label htmlFor="zippy" />
            <input
              type="number"
              id="zippy"
              name="zippy"
              placeholder="Yo Zip Code"
            />
            <label htmlFor="zity" />
            <input type="text" id="zity" name="zity" placeholder="Yo City" />
            <label htmlFor="country" />
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Yo Country"
            />
          </div>
          <div>
            <h3>Payment Details</h3>
            <label htmlFor="e-money" />
            <input
              type="radio"
              id="e-money"
              name="payment"
              placeholder="e-Money"
            />
            <label htmlFor="cash" />
            <input
              type="radio"
              id="cash"
              name="payment"
              placeholder="Cash on Delivery"
            />
          </div>
          {eMoneyIsSelected}
        </form>
      </div>
    </section>
  );
};

export default Checkout;
