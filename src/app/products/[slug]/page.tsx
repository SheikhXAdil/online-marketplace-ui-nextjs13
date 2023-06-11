'use client'
import { Button } from "@/components/ui/button"
import { products } from "@/utils/Products"
import { ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.linkText,
    }))
}

const Product = ({ params }: { params: { slug: string } }) => {

    const productArr = products.filter((product) => product.linkText === params.slug)
    const [product] = productArr

    const [mainPic, setMainPic] = useState(product.pictures[0])
    const [Quantity, setQuantity] = useState(1)

    const sizes = ["XS", "S", "M", "L", "XL"]

    return (
        <section className="bg-[#fcfcfc]">

            <section className="w-10/12 mx-auto flex flex-col gap-8">

                <div className="flex flex-wrap py-12 justify-around min-h-screen">

                    <div className="w-[30%] md:w-[10%] flex flex-col gap-3">
                        {product.pictures.map((picture, index) => {
                            return (
                                <Image key={index} src={picture} alt={product.title} width={100} height={100} className="cursor-pointer" onMouseEnter={() => { setMainPic(picture) }} onMouseLeave={() => { setMainPic(product.pictures[0]) }} />
                            )
                        })}
                    </div>

                    <div className="w-[65%] md:w-[50%] h-[50vh] md:h-screen">
                        <div className="relative w-full h-full">
                            <Image src={mainPic} alt={product.title} fill className="flex items-start sm:object-contain md:object-fill" />
                        </div>
                    </div>

                    <div className="w-full md:w-[30%] flex flex-col md:px-8 py-16 gap-6">

                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-semibold">{product.title}</h1>
                            <p className="text-2xl font-light">{product.clothingCategory}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">Select Size</h3>
                            <ul className="list-none flex gap-4">
                                {sizes.map((size, index) => {
                                    return (
                                        <li key={index} className="md:h-9 h-8 md:w-10 w-8 flex justify-center items-center font-bold rounded-full cursor-pointer p-3 border-2 hover:box-shadow: rgba(0, 0, 0, 0.4) 0px 1000px 3000px;">{size}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="flex gap-5">
                            <h5 className="font-bold">Quantity</h5>
                            <div className="flex gap-2">
                                <Button className="w-8 h-8 p-3 rounded-full text-xl text-black bg-[#f1f1f1]" onClick={() => { setQuantity(Quantity - 1) }}>-</Button>
                                <span className="w-4 h-10 flex items-center justify-center text-lg">{Quantity}</span>
                                <Button className="w-8 h-8 p-3 rounded-full text-xl text-black bg-white border-2 border-black" onClick={() => { setQuantity(Quantity + 1) }}>+</Button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button className="w-40 h-12 rounded-none">
                                <div className="flex w-max gap-2">
                                    <ShoppingCartIcon />
                                    <p>Add to Cart</p>
                                </div>
                            </Button>
                            <h3 className="flex items-center text-xl sm:text-3xl md:text-2xl lg:text-3xl font-bold">{product.price}</h3>
                        </div>

                    </div>
                </div>


                <section className="bg-white py-16 px-8 flex flex-col gap-8">

                    <div className="relative flex items-center">

                        <h1 className='text-2xl sm:text-3xl font-semibold'>Product Information</h1>
                        <div className='absolute'>
                            <h3 className='z-0 text-[#212121] text-4xl sm:text-6xl md:text-[7rem] leading-none font-extrabold opacity-[0.07]'>OVERVIEW</h3>
                        </div>

                    </div>

                    <div className='mt-8 bg-black h-[0.1rem]' />

                    <div className="flex flex-col sm:flex-row justify-between w-full gap-6">

                        <h3 className="text-xl font-bold w-full sm:w-1/3">PRODUCT DETAILS</h3>
                        <p className="text-lg w-full sm:w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa incidunt porro cum excepturi est, obcaecati aut minus ratione reprehenderit aliquam, quia eveniet necessitatibus nulla perferendis nobis! Nostrum facilis dolorum eveniet dignissimos aliquid explicabo, eos, quis voluptate corporis ipsam distinctio ratione accusantium quibusdam voluptates excepturi repellendus nam perspiciatis non molestias facere.</p>

                    </div>

                    <div className="flex flex-col sm:flex-row justify-between w-full gap-6">

                        <h3 className="text-xl font-bold w-full sm:w-1/3">PRODUCT PRECAUTIONS</h3>
                        <ul className="flex flex-col gap-4 mx-4 sm:mx-12 w-full sm:w-2/3 list-disc font-semibold">
                            <li>Hand wash using cold water.</li>
                            <li>Do not using bleach.</li>
                            <li>Hang it to dry.</li>
                            <li>Iron on low temperature.</li>
                        </ul>

                    </div>

                </section>
            </section>

        </section>
    )
}

export default Product
