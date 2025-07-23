const CartDetailsItem = ({ name, qty, price, discount }) => {
  const total = qty * price;
  const subtotal = total - (total * discount) / 100;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr]">
      <span>{name}</span>
      <span className="flex justify-center font-exo">
        {qty < 10 && <span>0</span>}
        {qty}
      </span>
      <span className="flex justify-end font-exo">$ {subtotal.toFixed(2)}</span>
    </div>
  );
};

export default CartDetailsItem;
