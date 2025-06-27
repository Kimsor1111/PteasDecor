const Checkbox = ({ label, value, topic, onChange }) => {
  return (
    <li>
      <label className="flex items-center gap-3 text-[16px] text-[#414141]">
        <input
          className="mt-1"
          type="checkbox"
          checked={topic === value}
          onChange={() => onChange(value)}
        />
        {label}
      </label>
    </li>
  );
};

export default Checkbox;
