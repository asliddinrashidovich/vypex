import { X } from "lucide-react";
import { useState } from "react";

function Collapser() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full mx-auto dark-card p-6 ">
      <div className={`flex items-center justify-between cursor-pointer ${isOpen ? "mb-3.5" : "mb-0"}`} onClick={() => setIsOpen(!isOpen)}>
        <h4 className="text-[#F1F1EF] font-semibold leading-8 text-[24px] ">
          Lorem ipsum bibendum interdum sed nunc non integer platea
        </h4>
        <X size={25} className={`text-white transition-all duration-200 ${isOpen ? "rotate-90" : "rotate-45"}`} />
      </div>
      <p className={`text-[#FFFFFF99] text-[20px] font-medium leading-7 ${isOpen ? "flex" : "hidden"}`}>Lorem ipsum luctus viverra commodo commodo a netus urna semper adipiscing ac id enim interdum pellentesque amet pretium sagittis consectetur amet aliquam tincidunt mi lectus pellentesque interdum nisi egestas viverra bibendum etiam commodo erat urna</p>
    </div>
  );
}

export default Collapser;
