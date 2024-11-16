import Image from "next/image";
export default function StudentRegisterDetails (){
    return(
        <>
            {/* Registration Profile */}
        <section className=" bg-[#FFFFFF] w-full xl:w-[350px] h-[633px] rounded-[15px] px-[15px] py-[16px] border border-[var(--border)] flex flex-col gap-[24px]">
          <h3 className="font-[600] text-[24px] leading-[32.68px] text-[--primary-text-color]">School fees details</h3>
          <div className="flex items-center w-[317px] h-[64px] rounded-[8px] p-[10px] gap-[14px] border border-[var(--border)] text-[var(--danger)]">
          <div className="w-[24px] h-[24px]">
          <Image
              src={"/icons/information_diamond.svg"}
              alt="information diamond image"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
          </div>
            <p className="font-[400] text-[16px] leading-[21.79px]">This students is yet to make full payment</p>
          </div>
          <section className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[25px]">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">School fees:</h6>
              <p className="border border-[var(--border)] rounded-[8px] w-[199px] h-[39px] p-[10px] flex items-center font-[400] text-[18px] leading-[25px] text-[var(--primary-text-color)]">&#8358;100,000</p>
            </div>

            <div className="flex items-center gap-[15px] ">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">Amount Paid:</h6>
              <div className="flex items-center w-[199px] h-[39px]">
                <p className="w-[72px] h-[42px] p-[10px] border border-[var(--border)] rounded-tl-[8px] rounded-bl-[8px] font-[400] text-[16px] text-[var(--grey)] leading-[21.79px]">NIL</p>
                <p className="w-[128px] h-[39px] rounded-tr-[8px] rounded-br-[8px] border-t border-t-[var(--border)] border-r border-r-[var(--border)] border-b border-b-[var(--border)] py-[10px] pl-[4px] pr-[10px] text-[14px] font-[400] leading-[19.07px] text-[var(--grey)] flex items-center">out of &#8358;100,000</p>
              </div>
            </div>

            <div className="flex items-center gap-[68px] ">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">Status:</h6>
              <p className="border border-[var(--border)] rounded-[8px] w-[199px] h-[39px] p-[10px] flex items-center font-[400] text-[18px] leading-[25px] text-[var(--danger)]">Not paid</p>
            </div>

            <div className="flex items-center gap-[54px]">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">Paid Via:</h6>
              <p className="border border-[var(--border)] rounded-[8px] w-[199px] h-[39px] p-[10px] flex items-center font-[400] text-[18px] leading-[25px] text-[var(--grey)]">N/A</p>
            </div>

            <div className="flex items-center gap-[5px]">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">Additional fees:</h6>
              <p className="border border-[var(--border)] rounded-[8px] w-[199px] h-[39px] p-[10px] flex items-center font-[400] text-[18px] leading-[25px] text-[var(--grey)]">N/A</p>
            </div>

            <div className="flex items-center gap-[23px]">
              <h6 className="text-[16px] font-[400] text-[var(--primary-text-color)] leading-[21.79px]">Amount Paid</h6>
              <p className="border border-[var(--border)] rounded-[8px] w-[199px] h-[39px] p-[10px] flex items-center font-[400] text-[18px] leading-[25px] text-[var(--grey)]">N/A</p>
            </div>

            <button className="w-[317px] h-[48px] rounded-[22px] px-[10px] py-[13px] bg-[var(--primary)] font-[700] text-[16px] leading-[20px] text-[var(--secondary-text-color)]">View payment history</button>
          </section>
        </section>
        </>
    )
}