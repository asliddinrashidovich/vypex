import Marquee from "react-fast-marquee";
import { services1, services2 } from "../data";

function Services({children}) {
  return (
    <section className="relative mb-40">
      {children}

      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={true}
        loop={0}
        className="mb-3"
      >
        {services1.map((item) => (
          <div
            key={item.title}
            className="dark-card cursor-pointer px-4 py-2 md:p-4 mx-2 rounded-[40px] flex items-center gap-3"
          >
            <img src={item.img} alt={item.title} className="w-10 md:w-[70px]" />
            <p className="text-white text-[15px] md:text-[24px] font-semibold leading-[33px]">
              {item.title}
            </p>
          </div>
        ))}
      </Marquee>
      <Marquee
        speed={40}
        gradient={false}
        direction
        pauseOnHover={true}
        loop={0}
        className="mb-3"
      >
        {services2.map((item) => (
          <div
            key={item.title}
            className="dark-card cursor-pointer px-4 py-2 md:p-4 mx-2 rounded-[40px] flex items-center gap-3"
          >
            <img src={item.img} alt={item.title} className="w-10 md:w-[70px]" />
            <p className="text-white text-[15px] md:text-[24px] font-semibold leading-[33px]">
              {item.title}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Services;
