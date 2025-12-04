import { useState } from "react";
import Button from "../button";
import { Search } from "lucide-react";

function BlogsComponent() {
  const [active, setActiveTab] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <section className="px-5 mb-40 pt-45">
      <div className="max-w-[1248px] mx-auto ">
        <div className="flex gap-10 min-[900px]:flex-row flex-col min-[900px]:items-center justify-between mb-12">
          <div className="flex flex-row max-[500px]:flex-col min-[500px]:items-center gap-3">
            <div onClick={() => setActiveTab(1)}>
              <Button
                className={
                  active == 1
                    ? "border-2 border-transparent"
                    : "border-2 border-[#12151B]"
                }
                type={active == 1 ? "primary" : "secondary"}
              >
                All News
              </Button>
            </div>
            <div onClick={() => setActiveTab(2)}>
              <Button
                className={
                  active == 2
                    ? "border-2 border-transparent"
                    : "border-2 border-[#12151B]"
                }
                type={active == 2 ? "primary" : "secondary"}
              >
                Research
              </Button>
            </div>
            <div onClick={() => setActiveTab(3)}>
              <Button
                className={
                  active == 3
                    ? "border-2 border-transparent"
                    : "border-2 border-[#12151B]"
                }
                type={active == 3 ? "primary" : "secondary"}
              >
                Announcement
              </Button>
            </div>
          </div>
          <div className="flex items-center rounded-[20px] border-2 gap-2.5 border-[#12151B] py-5 px-6 min-[900px]:max-w-[500px] w-full">
            <Search color="#F5F9FFDB" />
            <input
              type="text"
              placeholder="Search Posts..."
              className="w-full outline-none text-[#F5F9FFDB] text-[20px] font-medium leading-[100%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
          {arr.map((_, index) => (
            <div key={index}>
              <img src="/blog/blog.png" className="mb-6 w-full" alt="blog" />
              <h4 className="text-[22px] px-5 font-semibold leading-[30px] text-[#FFFFFF] mb-3">
                Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc
              </h4>
              <p className="text-[16px] px-5 font-normal leading-6 text-[#FFFFFFB2] mb-6">
                Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc
                sollicitudin viverra semper ut netus.
              </p>
              <div className=" px-5 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white"></div>
                <p className="text-[15px] font-medium leading-6 text-[#FFFFFFB2]">Vypex AI</p>
                <p className="text-[15px] font-medium leading-6 text-[#FFFFFFB2]">●</p>
                <p className="text-[15px] font-medium leading-6 text-[#FFFFFFB2]">November 20, 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsComponent;
