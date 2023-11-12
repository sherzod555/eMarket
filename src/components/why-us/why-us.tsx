import FreeShipping from "../../assets/shipping.svg"
import Refund from "../../assets/refund.svg"
import Support from "../../assets/support.svg"


export const WhyUs = () => {
    return (
        <>
            <main className="container mx-auto w-[1252px]">

                <div className="flex items-center justify-around py-28 text-center uppercase text-[27px] font-medium">
                    <div className="w-52 hover:text-[#FB7181]">
                        <div>
                            <img className="mx-auto h-[78px] w-auto mb-11" src={FreeShipping} alt="shipping" />
                        </div>
                        <p>
                            Free Shipping
                        </p>
                    </div>
                    <div className="w-52 hover:text-[#FB7181]">
                        <div>
                            <img className="mx-auto h-[78px] w-auto mb-11" src={Refund} alt="refund" />
                        </div>
                        <p>
                            100% Refund
                        </p>
                    </div>
                    <div className="w-52 hover:text-[#FB7181]">
                        <div>
                            <img className="mx-auto h-[78px] w-auto mb-11" src={Support} alt="support" />
                        </div>
                        <p>
                            Support 24/7
                        </p>
                    </div>
                </div>

            </main>

        </>
    )
};
export default WhyUs