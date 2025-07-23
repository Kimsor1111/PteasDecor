import { useEffect, useState } from "react";
const InputForm = ({label, type, onValidChange, value, setValue}) => {
  const [expiry, setExpiry] = useState("");
  const [error, setError] = useState("");
  const isValidExpiry = (dateStr) => {
    const today = new Date().toISOString().slice(0, 7); // "YYYY-MM"
    return dateStr >= today;
  };
  useEffect(() => {
    if(type != 'month') return;
    if (!expiry) {
      setError("Expiration date is required.");
      return;
    }
     if (!isValidExpiry(expiry)) {
      onValidChange(false)
      setError("Your card is expired.");
      return;
    }
    setError("");
    if (isValidExpiry(expiry)) {
      onValidChange(true);
    };
  },[expiry, type, onValidChange]);

  return (
    <div className="w-full flex flex-col gap-2">
  <label className="text-gray-600">
    {label} <span className="text-red-500">*</span>
  </label>

  {type === 'month' ? (
    <div>
      <input
        type="month"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        required
        className="ps-2 py-2 rounded-md border border-[#919191] focus:outline-0"
      />
      {error && <p className="text-red-500 text-[12px] md:text-[14px] mt-1">{error}</p>}
    </div>
  ) : (
    <input
      className="ps-2 py-2 rounded-md border border-[#919191] focus:outline-0"
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      
    />
  )}
</div>

  )
}

export default InputForm