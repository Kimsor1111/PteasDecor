const Checkbox = ({ label, value, topic, onChange }) => {
  return (
    <li>
      <label className="flex items-center gap-3 text-[16px] text-[#414141] text-nowrap">
        <input
          className="mt-1 w-5 h-5 lg:w-4 lg:h-4 accent-[#3D3D3D]"
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
