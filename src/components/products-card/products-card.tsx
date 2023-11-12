import Prod1 from "../../assets/kros1.png"
import Prod2 from "../../assets/kros2.png"
import Prod3 from "../../assets/sumka1.png"
import Prod4 from "../../assets/sumka2.png"
import cart from "../../assets/prod-cart.svg"

import stars from "../../assets/rate.svg"
import "./products-card.css"

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
  {
    title: 'Fashion PU Leather Bags',
    image: Prod4,
    price: 120.50,
    lastPrice: 300,
    sale: 30,
  },

  {
    title: 'Lancaster',
    image: Prod3,
    price: 256,
    lastPrice: 700.35,
    sale: 50,
  },
  {
    title: 'Nike Air Max 270 React',
    image: Prod1,
    price: 299.43,
    lastPrice: 534.33,
    sale: 24,
  },

  {
    title: 'Nike Air Zoom Pegasus 36',
    image: Prod2,
    price: 340,
    lastPrice: 697,
    sale: 15,
  },
  {
    title: 'Nike Air Max 270 React',
    image: Prod1,
    price: 299.43,
    lastPrice: 534.33,
    sale: 24,
  },
  {
    title: 'Nike Air Max 270 React',
    image: Prod1,
    price: 299.43,
    lastPrice: 534.33,
    sale: 24,
  },
  {
    title: 'Fashion PU Leather Bags',
    image: Prod4,
    price: 120.50,
    lastPrice: 300,
    sale: 30,
  },
  {
    title: 'Lancaster',
    image: Prod3,
    price: 256,
    lastPrice: 700.35,
    sale: 50,
  },
  {
    title: 'Nike Air Zoom Pegasus 36',
    image: Prod2,
    price: 340,
    lastPrice: 697,
    sale: 15,
  },
];

export const ProductsCard = () => {
  return (
    <>
      <main className="grid grid-cols-4 gap-x-8 gap-y-10">
        {ProductsMockData.map((item, idx) => (
          <div className="w-[300px] rounded-[5px] border-[3px] border-[##F6F7F8] custom_prod" key={idx}>
            <div className="relative flex justify-center items-center">
              <div className="absolute hidden custom_cart w-[90%] h-[90%] bg-white/90">
                <p className="text-[#40BFFF] pt-[25%] text-center text-lg font-bold leading-8">ADD TO CART</p>
                <img className="mx-auto pt-3" src={cart} alt="cart" />
              </div>
              <img className="w-[300px] h-[272px]" src={item.image} alt={item.title} />
            </div>
            <div className="text-center pt-[10px] px-5 pb-4 tracking-[0.5px]">
              <p className="text-[#223263] text-lg font-bold leading-7 ">{item.title}</p>
              <img className="mx-auto pt-2" src={stars} alt="rating" />
              <div className="flex items-center justify-center gap-x-3">
                <p className="text-[#40BFFF] text-lg font-bold leading-8">
                  ${item.price}
                </p>
                <p className="text-[#9098B1] text-sm line-through">
                  ${item.lastPrice}
                </p>
                <p className="text-[#FB7181] text-sm font-bold">
                  {item.sale}% Off
                </p>
              </div>
            </div>
          </div>

        ))}
      </main>
    </>
  );
};

export default ProductsCard