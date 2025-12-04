import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Questions({children}) {
  return (
    <section className="relative mb-40">
      {children}
      <div className="relative">
        <div className="absolute h-[500px] translate-y-[-50%] left-0 top-[50%] z-50 pointer-events-none">
          <img src="/home/left.png" className="h-full" alt="left shadow" />
        </div>
        <div className="absolute h-[500px] translate-y-[-50%] right-0 top-[50%] z-50 pointer-events-none">
          <img src="/home/right.png" className="h-full" alt="right shadow" />
        </div>
        {/* <div className="absolute -bottom-10 z-50 left-0 right-0 w-full">
          <img
            src="/home/slider-bottom.png"
            className="w-full"
            alt="botom shadow"
          />
        </div> */}
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 3,
              // centeredSlides: false,
            }, 
            1200: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[260px] md:px-0 px-5 sm:w-[300px] lg:w-[350px]">
            <div className="w-full rounded-[40px] dark-card px-8 py-11 ">
              <p className="text-[24px] font-normal text-radial leading-9 mb-8">
                02 - Q1
              </p>
              <h4 className="text-[36px] font-semibold text-white leading-11 mb-8">
                Launch
              </h4>
              <p className="text-[18px] font-normal text-[#C2C2C4] leading-6">
                Lorem ipsum commodo ac in sed tristique sit felis interdum nisl
                odio congue consequat dolor sagittis diam senectus imperdiet
                justo morbi nibh vel{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Questions;
