import { useNavigate } from "react-router-dom";

function Button({ className, children, url = "#", type = "primary" }) {
  const navigate = useNavigate();
  if (type == "secondary") {
    return (
      <button
        onClick={() => navigate(url)}
        className={`${className} bg-[#0C0D12]  p-3 min-[400px]:p-4 cursor-pointer transition-all duration-200 rounded-2xl main-btn border-2 border-[#12151B]`}
      >
        <span className=" text-white hover:text-[#d2d2d2] duration-300 translate-all font-bold text-[16px] text-nowrap min-[400px]:text-[20px] leading-[100%]">
          {children}
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={() => navigate(url)}
      className={`${className} bg-[#F5F9FF] p-3 min-[400px]:p-4 cursor-pointer transition-all  duration-200 rounded-2xl main-btn`}
    >
      <span className="btn-gradient font-bold text-[16px] text-nowrap min-[400px]:text-[20px] leading-[100%]">
        {children}
      </span>
    </button>
  );
}

export default Button;
