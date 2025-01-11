import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { FaArrowUpLong, FaArrowDownLong} from "react-icons/fa6";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaSquareMinus } from "react-icons/fa6";
import { TbSquareDotFilled } from "react-icons/tb";
import Image from "next/image";
export default function MediaWalletTransactionAllDeposit() {
  return (
    <>
      <div className="flex flex-col gap-8 py-4">
        {/* This Week */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[18px] font-[500]">This Week</h4>
          <div className="flex flex-col gap-5">
            {/* part 1 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">School fees</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>

            {/* part 2 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">School fees</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>
            
          </div>
        </div>

        {/* Last Week */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[18px] font-[500]">Last Week</h4>
          <div className="flex flex-col gap-5">
            {/* part 1 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">Sales of Textbook</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>

            {/* part 4 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">School Fees</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>
            

            {/* part 6 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">Salaries</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Last Month */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[18px] font-[500]">Last Month</h4>
          <div className="flex flex-col gap-5">

            {/* part 1 */}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">Salaries</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>

            {/* part 2*/}
            <section className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <button className="bg-[var(--success)] w-[36px] h-[36px] p-[7.35px] rounded-[20px] text-[white] flex items-center justify-center">
                   <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
                </button>

                <div className="flex flex-col gap-[.1rem]">
                  <h5 className="text-[16px] font-[500]">Salaries</h5>
                  <p className="text-[14px] text-[var(--grey)]">Fri, 24th May</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[16px]">
                <p className="text-[16px]">100000.00</p>
                <FaArrowUpLong className="text-[var(--success)]"/>
                </div>

                <button className="bg-[#9bf8d1] w-[94px] p-[10px] rounded-[10px] text-[var(--success)] text-[14px] flex items-center gap-1">
                    <BsCheckSquareFill/>
                    Received
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
