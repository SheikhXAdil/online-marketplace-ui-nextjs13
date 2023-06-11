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
    const fourRandomProducts = shuffledProducts.slice(0, 4)

    return (
        <section className='w-10/12 mx-auto flex flex-col gap-10'>
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-[#0062F5] font-bold text-sm'>PROMOTIONS</h2>
                <h3 className='text-4xl font-bold'>Our Promotions Events</h3>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
                    {fourRandomProducts.map((product) => {
                        return (
                            <ProductCard key={product.id} title={product.title} clothingCategory={product.clothingCategory} linkText={product.linkText} price={product.price} picture={product.pictures[0]} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductSection
