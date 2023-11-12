import Footer_logo from "../../assets/Logo.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import west_uni from "../../assets/Western-union.svg"
import masterCard from "../../assets/mastercard.svg"
import paypal from "../../assets/Paypal.svg"



export const Footer = () => {

    
    return (
        <>
        <div className=" bg-[#BCDDFE]">

            <main className="container mx-auto w-[1252px] text-[#22262A]">
                <div className="flex items-center justify-between pt-36 pb-64">
                    <div className="w-56">
                        <div className="flex items-center gap-x-2">
                            <a href="#"><img src={Footer_logo} alt="logo" /></a>
                            <p className="text-lg font-bold">
                                E-Comm
                            </p>
                        </div>
                        <p className="text-xs pt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </p>
                    </div>
                    <div className="w-52">
                        <div>
                            <p className="text-lg font-medium">
                                Follow Us
                            </p>
                            <p className="text-xs pt-5">
                            Since the 1500s, when an unknown printer took a galley of type and scrambled.
                            </p>
                        </div>
                        <div className="pt-6 flex items-center gap-x-10">
                            <img src={facebook} alt="fb" />
                            <img src={twitter} alt="twt" />
                        </div>
                    </div>
                    <div className="w-36">
                        <p className="text-lg font-medium">
                            Contact Us
                        </p>
                        <p className="text-sm">
                        E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                        </p>
                    </div>
                </div>


                <div className="border-t-2 w-full border-[#F6F7F8]"></div>

                <div className="pt-7 pb-12 flex items-center justify-between">
                    <p className="text-[#C1C8CE] text-sm">
                    &copy; 2023 e-Market template by SHER_555
                    </p>

                    <div className="flex items-center gap-x-5">
                        <img src={west_uni} alt="card" />
                        <img src={masterCard} alt="card" />
                        <img src={paypal} alt="card" />
                        <img src={masterCard} alt="card" />


                    </div>
                </div>

            </main>
        </div>

        </>
    )
};
export default Footer