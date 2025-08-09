import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const QuestionDropDown = ({ question, answer }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={`w-full ${
        dropdown
          ? "2xl:h-[120px] xl:h-[140px] lg:h-[160px] md:h-[120px] h-fit"
          : "md:h-[55px] h-[75px]"
      } border-[1px] rounded border-[#A6A6A6] transition-[height] duration-400 cursor-pointer p-4 selection:bg-transparent`}
      onClick={() => setDropdown(!dropdown)}
    >
      <h1
        className={`w-full ${
          dropdown ? "h-fit " : "h-full"
        } relative text-[#222222] lg:text-sm items-center md:items-baseline text-sm pr-5 flex justify-between`}
      >
        {question}
        <FontAwesomeIcon icon={dropdown ? faCaretUp : faCaretDown} />
      </h1>
      <p
        className={`${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        } md:transition-[opacity] md:duration-500 text-[#666666] lg:text-sm text-[12px] mt-5`}
      >
        {answer}
      </p>
    </div>
  );
};

export default QuestionDropDown;
