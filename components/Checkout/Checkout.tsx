import { useRouter } from "next/router";
import React, { useState } from "react";
import clsx from "classnames";

import Summary from "./Summary";
import ThankYou from "../ThankYouModal/ThankYou";
import styles from "./styles/Checkout.module.scss";

const isEmpty = (value: string) => value.trim() === "";
const isTenChars = (value: string) => value.trim().length === 10;

const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type ContactInput = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  payment: string;
  eMoneyNum: string;
  eMoneyPin: string;
  touched: {
    name: boolean;
    email: boolean;
    phone: boolean;
    address: boolean;
    zipCode: boolean;
    city: boolean;
    country: boolean;
    payment: boolean;
    eMoneyNum: boolean;
    eMoneyPin: boolean;
  };
  validity: {
    name: boolean;
    email: boolean;
    phone: boolean;
    address: boolean;
    zipCode: boolean;
    city: boolean;
    country: boolean;
    payment: boolean;
    eMoneyNum: boolean;
    eMoneyPin: boolean;
  };
};

const intialFormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  payment: "",
  eMoneyNum: "",
  eMoneyPin: "",
  touched: {
    name: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    payment: false,
    eMoneyNum: false,
    eMoneyPin: false,
  },
  validity: {
    name: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    payment: false,
    eMoneyNum: false,
    eMoneyPin: false,
  },
};

const Checkout = () => {
  const [form, setForm] = useState<ContactInput>(intialFormState);
  const [eMoney, setMoney] = useState(null);
  const [cash, setCash] = useState(null);
  // const [eMoneyNum, setEMoneyNum] = useState(null);
  // const [eMoneyPin, setEMoneyPin] = useState(null);

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    let nameIsValid = !isEmpty(form.name);
    let emailIsValid = isEmailValid(form.email);
    let phoneIsValid = isTenChars(form.phone);
    let addressIsValid = !isEmpty(form.address);
    let zipCodeisValid = !isEmpty(form.zipCode);
    let cityIsValid = !isEmpty(form.city);
    let countryIsValid = !isEmpty(form.country);
    let paymentIsValid = !isEmpty(form.payment);
    let eMoneyNumIsValid = !isEmpty(form.eMoneyNum);
    let eMoneyPINIsValid = isTenChars(form.eMoneyPin);

    setForm((current) => ({
      ...current,
      validity: {
        name: nameIsValid,
        email: emailIsValid,
        phone: phoneIsValid,
        address: addressIsValid,
        zipCode: zipCodeisValid,
        city: cityIsValid,
        country: countryIsValid,
        payment: paymentIsValid,
        eMoneyNum: eMoneyNumIsValid,
        eMoneyPin: eMoneyPINIsValid,
      },
    }));

    let formIsValid =
      nameIsValid &&
      emailIsValid &&
      phoneIsValid &&
      addressIsValid &&
      zipCodeisValid &&
      cityIsValid &&
      countryIsValid &&
      paymentIsValid;

    if (form.payment === "e-Money") {
      formIsValid =
        nameIsValid &&
        emailIsValid &&
        phoneIsValid &&
        addressIsValid &&
        zipCodeisValid &&
        cityIsValid &&
        countryIsValid &&
        paymentIsValid &&
        eMoneyPINIsValid &&
        eMoneyNumIsValid;
    }

    if (formIsValid) {
      setLoading(false);
      setConfirmation(true);
      setForm(intialFormState);
      console.log("Form Is Valid");
    } else {
      console.log("Form Is Invalid");
    }
  };

  const eMoneyIsSelected = (
    <div className={styles.eMoneyDiv}>
      <label htmlFor="e-moneyNum" />
      e-Money Number
      <input
        type="text"
        id="e-moneyNum"
        name="e-moneyNum"
        placeholder="e-Money Number"
        onChange={(e) => {
          setForm((current) => ({
            ...current,
            eMoneyNum: e.target.value,
            touched: {
              ...current.touched,
              eMoneyNum: true,
            },
          }));
        }}
      />
      <label htmlFor="e-moneyPin" />
      e-Money PIN
      <input
        type="text"
        id="e-moneyPin"
        name="e-moneyPin"
        placeholder="e-Money Pin"
        onChange={(e) => {
          setForm((current) => ({
            ...current,
            eMoneyPin: e.target.value,
            touched: {
              ...current.touched,
              eMoneyPin: true,
            },
          }));
        }}
      />
    </div>
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <button onClick={goBackHandler} className={styles.goBackBtn}>
          Go Back
        </button>
        <div className={styles.formBox}>
          <h1>CHECKOUT</h1>
          <form className={styles.form} onSubmit={submitFormHandler}>
            <div className={styles.formDivOne}>
              <h3>Billing Details</h3>
              <div className={styles.innerDiv}>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        name: e.target.value,
                        touched: {
                          ...current.touched,
                          name: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.name ||
                        (!form.validity.name && form.touched.name),
                      invalid: !form.validity.name && !form.touched.name,
                    })}
                    value={form.name}
                  />
                </label>
              </div>
              <div className={styles.innerDiv}>
                <label htmlFor="address">
                  Email Address
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Email Address"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        email: e.target.value,
                        touched: {
                          ...current.touched,
                          email: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.address ||
                        (!form.validity.address && form.touched.address),
                      invalid: !form.validity.address && !form.touched.address,
                    })}
                    value={form.email}
                  />
                </label>
              </div>
              <div className={styles.innerDiv}>
                <label htmlFor="phoneNumber">
                  Phone Number
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        phone: e.target.value,
                        touched: {
                          ...current.touched,
                          phone: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.phone ||
                        (!form.validity.phone && form.touched.phone),
                      invalid: !form.validity.phone && !form.touched.phone,
                    })}
                    value={form.phone}
                  />
                </label>
              </div>
            </div>
            <div className={styles.formDivTwo}>
              <h3>Shipping Info</h3>
              <div className={styles.innerDiv}>
                <label htmlFor="address">
                  Your Address
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        address: e.target.value,
                        touched: {
                          ...current.touched,
                          address: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.address ||
                        (!form.validity.address && form.touched.address),
                      invalid: !form.validity.address && !form.touched.address,
                    })}
                    value={form.address}
                  />
                </label>
              </div>
              <div className={styles.innerDiv}>
                <label htmlFor="zippy">
                  Zip Code
                  <input
                    type="text"
                    id="zippy"
                    name="zippy"
                    placeholder="Zip Code"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        zipCode: e.target.value,
                        touched: {
                          ...current.touched,
                          zipCode: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.zipCode ||
                        (!form.validity.zipCode && form.touched.zipCode),
                      invalid: !form.validity.zipCode && !form.touched.zipCode,
                    })}
                    value={form.zipCode}
                  />
                </label>
              </div>
              <div className={styles.innerDiv}>
                <label htmlFor="city">
                  City
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        city: e.target.value,
                        touched: {
                          ...current.touched,
                          city: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.city ||
                        (!form.validity.city && form.touched.city),
                      invalid: !form.validity.city && !form.touched.city,
                    })}
                    value={form.city}
                  />
                </label>
              </div>
              <div className={styles.innerDiv}>
                <label htmlFor="country">
                  Country
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        country: e.target.value,
                        touched: {
                          ...current.touched,
                          country: true,
                        },
                      }));
                    }}
                    className={clsx({
                      control:
                        form.validity.country ||
                        (!form.validity.country && form.touched.country),
                      invalid: !form.validity.country && !form.touched.country,
                    })}
                    value={form.country}
                  />
                </label>
              </div>
            </div>
            <div className={styles.formDivThree}>
              <h3>Payment Details</h3>
              <h4>Payment Method</h4>
              <div className={styles.radioDiv}>
                <label htmlFor="e-money">
                  <input
                    type="radio"
                    id="e-money"
                    name="payment"
                    value="e-Money"
                    placeholder="e-Money"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        payment: e.target.value,
                        touched: {
                          ...current.touched,
                          payment: true,
                        },
                      }));
                      setMoney(true);
                      setCash(false);
                    }}
                  />
                  e-Money
                </label>
              </div>
              <div className={styles.radioDiv}>
                <label htmlFor="cash">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="Cash"
                    placeholder="Cash on Delivery"
                    onChange={(e) => {
                      setForm((current) => ({
                        ...current,
                        payment: e.target.value,
                        touched: {
                          ...current.touched,
                          payment: true,
                        },
                      }));
                      setMoney(false);
                      setCash(true);
                    }}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
            {eMoney && eMoneyIsSelected}
            <button className={styles.checkoutBtn} type="submit">
              Continue & Pay
            </button>
          </form>
        </div>
        <Summary />
        <ThankYou show={confirmation} />
      </section>
    </>
  );
};

export default Checkout;
