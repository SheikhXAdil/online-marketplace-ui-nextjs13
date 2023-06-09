import ProductCard from "@/components/ProductCard"
import { products } from "@/utils/Products"

const Female = () => {

    const femaleProducts = products.filter((product) => product.category === "female")

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto">
                {femaleProducts.map((product) => {
                    return (
                        <ProductCard key={product.id} title={product.title} clothingCategory={product.clothingCategory} linkText={product.linkText} price={product.price} picture={product.pictures[0]} />
                    )
                })}
            </div>
        </div>
    )
}

export default Female
