import ProductsCard from "../products-card/products-card";
import BestSellerTabs from "./best-seller-tabs";

export const BestSeller = () => {
    return (
        <>
            <main className="container mx-auto">
                <h2 className="uppercase text-[#22262A] text-4xl mb-8 font-semibold">
                    Best Seller
                </h2>
                <BestSellerTabs />
                <div className="pt-6">
                    <ProductsCard />
                </div>

            </main>
        </>
    )
};
export default BestSeller