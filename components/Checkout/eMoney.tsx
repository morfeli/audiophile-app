const eMoney = () => {
  return (
    <div>
      <label htmlFor="e-moneyNum" />
      <input
        type="text"
        id="e-moneyNum"
        name="e-moneyNum"
        placeholder="e-Money Number"
      />
      <label htmlFor="e-moneyPin" />
      <input
        type="text"
        id="e-moneyPin"
        name="e-moneyPin"
        placeholder="e-Money Pin"
      />
    </div>
  );
};

export default eMoney;
