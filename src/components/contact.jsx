import Button from "./button";

function Contact() {
  return (
    <section className="px-5 z-60 overflow-hidden py-20 mb-20">
      <div className="max-w-[1400px] mx-auto relative">
          <div className="absolute -left-70 z-40 -top-60">
            <img src="/snace-left.png" alt="snace left" />
          </div>
          <div className="absolute -right-50 z-40 -bottom-50">
            <img src="/snace-right.png" alt="snace left" />
          </div>
        <div className="relative max-w-[1400px] mx-auto p-10 md:p-20 rounded-[40px] contact-bg">
          <div className="max-w-[550px] mx-auto relative z-50">
            <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-5">
              Join to the Legendary{" "}
              <span className="text-radial">$VYPEX Movements</span>
            </h2>
            <p className="max-w-[405px] mx-auto text-[#6C7492] leading-7 text-[17px] md:text-[20px] font-normal text-center mb-8">
              Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices
              ac nisl sed varius
            </p>
            <div className="flex justify-center gap-3">
              <Button>Join Waitlist</Button>
              <button
                className={`bg-[#0000004A] border-[#FFFFFF80] border-2 p-3 min-[400px]:p-4 cursor-pointer transition-all duration-200 rounded-2xl`}
              >
                <span className="text-[#F5F9FFDB] font-bold text-[16px] text-nowrap min-[400px]:text-[20px] leading-[100%]">
                  Reffer Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
