import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const QuestionDropDown = ({ question, answer }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="w-full border-[1px] rounded border-[#A6A6A6] cursor-pointer p-4 selection:bg-transparent"
      onClick={() => setDropdown(!dropdown)}
    >
      <h1 className="w-full relative text-[#222222] lg:text-sm text-sm pr-5">
        {question}
        <FontAwesomeIcon
          icon={dropdown ? faCaretUp : faCaretDown}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        />
      </h1>
      {dropdown && (
        <p className="text-[#666666] lg:text-sm text-[12px] mt-5">{answer}</p>
      )}
    </div>
  );
};

export default QuestionDropDown;
