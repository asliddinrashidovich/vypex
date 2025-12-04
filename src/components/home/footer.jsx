function Footer() {
  return (
    <footer className="px-5">
      <div className="max-w-[1400px] mx-auto flex flex-col min-[800px]:flex-row items-start justify-between gap-10 min-[1000px]:gap-[100px] min-[1250px]:gap-[190px] mb-15">
        <div className="w-full md:min-w-[300px]">
          <a href="/" className="flex items-center gap-3 mb-11">
            <img src="/logo.svg" className="w-[31px]" alt="main-logo" />
            <p className="text-radial font-semibold text-[24px] leading-[100%] text-[#F5F9FF]">
              Vypex AI
            </p>
          </a>
          <p className="mb-11 text-[#999A99] text-[20px] leading-7 font-normal ">
            Subscribe to our newsletter to get the latest updates on everything
            Vypex
          </p>
          <form className="mb-11">
            <label
              htmlFor="email"
              className="border-b border-[#FFFFFF66] py-3 flex justify-between"
            >
              <input
                type="text"
                placeholder="Email address"
                className="w-full outline-none text-[#FFFFFF66] "
              />
              <img src="/home/arrowUp.png" alt="arrow up" />
            </label>
          </form>
          <div className="flex flex-wrap items-center gap-[13px]">
            <img
              className="cursor-pointer"
              src="/home/social media/social_media1.png"
              alt="social media 1"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media2.png"
              alt="social media 2"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media3.png"
              alt="social media 3"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media4.png"
              alt="social media 4"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media5.png"
              alt="social media 5"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media6.png"
              alt="social media 6"
            />
            <img
              className="cursor-pointer"
              src="/home/social media/social_media7.png"
              alt="social media 7"
            />
          </div>
        </div>
        <div className="w-full">
          <h4 className="text-[20px] text-nowrap font-semibold leading-6 text-white mb-10">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Presale
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Predictive AI
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Buy Token
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Whitepaper
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Tokenomics
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Roadmap
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-[20px] text-nowrap font-semibold leading-6 text-white mb-10">
            AI Agents
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              For Individuals
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              For Business
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              DePIN
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Join Waitlist
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-[20px] text-nowrap font-semibold leading-6 text-white mb-10">
            Extras
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Media Kit
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Blogs
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Documentation
            </li>
            <li className="cursor-pointer hover:text-white duration-200 transition-all  text-nowrap text-[#FFFFFFCC] text-[18px] font-normal leading-7">
              Support
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-[1400px] mx-auto border-t border-[#3F3F3F] pt-[35px] pb-[58px]">
        <p className="text-[#8B8B8B] font-normal text-[16px] leading-5">
          Copyright @ 2025 Vypex AI
        </p>
        <div className="flex items-center gap-6">
          <p className="text-[#8B8B8B] font-normal text-[16px] leading-5">
            Terms
          </p>
          <p className="text-[#8B8B8B] font-normal text-[16px] leading-5">
            Disclaimers
          </p>
          <p className="text-[#8B8B8B] font-normal text-[16px] leading-5">
            Privacy
          </p>
        </div>
        <div>
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
