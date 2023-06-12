import ProductCard from "@/components/ProductCard";
import { product, products } from "@/utils/Products"


const shuffleArray = (array: product[]) => {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array

}


const ProductSection = () => {

    const shuffledProducts = shuffleArray(products)
    const fourRandomProducts = shuffledProducts.slice(0, 3)

    return (
        <section className='w-10/12 mx-auto flex flex-col gap-10'>
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-[#0062F5] font-bold text-sm'>PROMOTIONS</h2>
                <h3 className='text-4xl font-bold'>Our Promotions Events</h3>
            </div>

            <div>
                <div className="flex flex-wrap justify-center w-full">
                    {fourRandomProducts.map((product) => {
                        return (
                            <div key={product.id} className="w-full sm:w-1/3 flex items-center justify-center">
                                <ProductCard title={product.title} clothingCategory={product.clothingCategory} linkText={product.linkText} price={product.price} picture={product.pictures[0]} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductSection
