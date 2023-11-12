export const BestSellerTabs =()=>{
    return(
        <>
            <main>
                <ul className="flex gap-8 items-center text-[#262626] text-[22px] mx-auto justify-center">
                    <li className="hover:text-[#33A0FF] hover:underline"><a href="/">All</a></li>
                    <li className="hover:text-[#33A0FF] hover:underline"><a href="/">Bags</a></li>
                    <li className="hover:text-[#33A0FF] hover:underline"><a href="/">Sneakers</a></li>
                    <li className="hover:text-[#33A0FF] hover:underline"><a href="/">Belt</a></li>
                    <li className="hover:text-[#33A0FF] hover:underline"><a href="/">Sunglasses</a></li>
                </ul>
            </main>
        </>
    );
};
export default BestSellerTabs;