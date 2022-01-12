const SummaryList = ({ name, price, amount, slug }) => {
  return (
    <li>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
      <p>x{amount}</p>
    </li>
  );
};

export default SummaryList;
