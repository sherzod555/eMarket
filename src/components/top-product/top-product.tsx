import Prod2 from "../../assets/kros2.png"
import Prod3 from "../../assets/sumka1.png"
import Prod4 from "../../assets/sumka2.png"
const ProductsMockData = [
    {
        title: 'Fashion PU Leather Bags',
        image: Prod4,
        price: 120.50,
        lastPrice: 300,
        sale: 30,
    },

    {
        title: 'Nike Air Zoom Pegasus 36',
        image: Prod2,
        price: 340,
        lastPrice: 697,
        sale: 15,
    },

    {
        title: 'Lancaster',
        image: Prod3,
        price: 256,
        lastPrice: 700.35,
        sale: 50,
    },
];

export const TopProducts = () => {
    return (
        <>
            <main className="container mx-auto w-[1252px]">
                <div className="flex items-center justify-center">

                    {ProductsMockData.map((item, idx) => (
                        <div key={idx}>
                            <div className="relative w-[400px] h-[350px] -mt-[90px] hover:shadow-xl">
                                <div className="absolute w-full h-full px-12 py-7">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[#223263] text-lg font-bold leading-7 w-[178px]">{item.title}</p>
                                        <p className="text-[#40BFFF] text-lg font-bold leading-8">
                                            ${item.price}
                                        </p>
                                    </div>

                                    <div className="pt-52 flex items-center justify-center gap-x-3">
                                        <p className="text-[#9098B1] text-sm line-through">
                                            ${item.lastPrice}
                                        </p>
                                        <p className="text-[#FB7181] text-sm font-bold">
                                            {item.sale}% Off
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-[400px] h-[350px]" src={item.image} alt={item.title} />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>


            </main>

        </>
    );
};

export default TopProducts