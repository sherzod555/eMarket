import Logo from "../../assets/Logo.svg"

export const Navbar = () => {
    return (
        <>
        <div className="border-t-2 w-screen border-[#FAFAFB]">
            
        </div>
            <main className="container mx-auto w-[1252px] text-[#22262A] py-[26px]">
                <nav className="flex items-center justify-between">
                    <div>
                        <a href="/" className="flex items-center gap-x-2"><img src={Logo} alt="logo" /> <p className="text-lg font-bold">E-Comm</p></a>
                    </div>

                    <div>
                        <ul className="flex items-center gap-x-24 text-2xl font-medium uppercase">
                            <li className="hover:text-[#40BFFF]"><a href="/">Home</a></li>
                            <li className="hover:text-[#40BFFF]"><a href="/">Bags</a></li>
                            <li className="hover:text-[#40BFFF]"><a href="/">sneakers</a></li>
                            <li className="hover:text-[#40BFFF]"><a href="/">belt</a></li>
                            <li className="hover:text-[#40BFFF]"><a href="/">contact</a></li>

                        </ul>
                    </div>
                </nav>
            </main>
        </>
    )
};
export default Navbar