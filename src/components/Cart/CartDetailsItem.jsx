const CartDetailsItem = ({ name, qty, price, discount }) => {
  const subtotal = price * (1 - discount / 100) * qty;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr]  font-exo">
      <span>{name}</span>
      <span className="flex justify-center">
        {qty < 10 && <span>0</span>}
        {qty}
      </span>
      <span className="flex justify-end">$ {subtotal.toFixed(2)}</span>
    </div>
  );
};

export default CartDetailsItem;
