import profileIcon from "../../assets/profile.svg"
import cart from "../../assets/Cart.svg"
import searchIcon from "../../assets/search.svg"

export const Header = () => {
    return (
        <>
            <header className="container mx-auto w-[1252px] py-7">
                <div className="text-[#262626] text-xl flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <p>EN ▾</p>
                        <p>USD ▾</p>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="flex items-center gap-x-[6px]">
                            <img src={profileIcon} alt="profile" />
                            <p className="">
                                My Profile
                            </p>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img className="absolute top-" src={cart} alt="cart" />
                                <p className="relative -top-2 left-3  text-center bg-[#FB7181] rounded-full w-[20px] h-[20px] text-white text-[10px] font-bold">5</p>
                            </div>
                            <p>
                                Items
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <p className="opacity-50">
                                $55.5
                            </p>
                            <img src={searchIcon} alt="search" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};
export default Header