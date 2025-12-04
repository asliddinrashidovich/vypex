import { ArrowUp } from "lucide-react";
import Button from "../button";

function Reseilience() {
  return (
    <section className="px-5 mb-40">
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-5">
          Audited <br className="max-[500px]:hidden" /> for{" "}
          <span className="text-radial">Resilience</span>
        </h2>
        <p className="max-w-[405px] mx-auto text-[#6C7492] leading-7 text-[17px] md:text-[20px] font-normal text-center mb-20">
          Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
          nisl sed varius
        </p>
        <div className="flex md:flex-row flex-col justify-center gap-6">
          <div className="dark-card md:max-w-[488px] p-11">
            <img
              className="mb-8"
              src="/presale/resilience1.png"
              alt="resilience1"
            />
            <h3 className="text-[#FFFFFF] font-semibold text-[38px] leading-[45px] mb-8">
              Certik Security Audit
            </h3>
            <p className="text-[#FFFFFF99] text-[24px] font-normal leading-8 mb-8">
              We have been audited by Certik to enhance our smart contract
              security, ensuring Ozak AI is protected by Certik’s world class
              security.
            </p>
            <div className="flex items-center gap-2">
              <Button className={"rounded-full"}>Completed</Button>
              <Button className={"rounded-full items-center flex"}>
                <img src="/arrow-up.png" className="w-[18px] h-[18px]" alt="" />
              </Button>
            </div>
          </div>
          <div className="dark-card md:max-w-[488px] p-11">
            <img
              className="mb-8"
              src="/presale/resilience2.png"
              alt="resilience1"
            />
            <h3 className="text-[#FFFFFF] font-semibold text-[38px] leading-[45px] mb-8">
              Certik Security Audit
            </h3>
            <p className="text-[#FFFFFF99] text-[24px] font-normal leading-8 mb-8">
              We have been audited by Certik to enhance our smart contract
              security, ensuring Ozak AI is protected by Certik’s world class
              security.
            </p>
            <div className="flex items-center gap-2">
              <Button className={"rounded-full"}>Completed</Button>
              <Button className={"rounded-full items-center flex"}>
                <img src="/arrow-up.png" className="w-[18px] h-[18px]" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reseilience;
