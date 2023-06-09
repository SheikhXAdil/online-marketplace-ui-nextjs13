'use client'
import { products } from "@/utils/Products"
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

    return (
        <section className="bg-[#fcfcfc]">

            <section className=" w-10/12 mx-auto flex flex-col gap-8">
                <div className="min-h-screen grid grid-cols-8 grid-rows-6 py-12">
                    <div className="col-span-1 row-span-4 flex flex-col gap-2">
                        {product.pictures.map((picture) => {
                            return (
                                <Image src={picture} alt={product.title} width={100} height={100} className="cursor-pointer" onMouseEnter={() => { setMainPic(picture) }} onMouseLeave={() => { setMainPic(product.pictures[0]) }} />
                            )
                        })}
                    </div>
                    <div className="col-span-5 row-span-6">
                        <div className="w-4/5 h-full relative">
                            <Image src={mainPic} alt={product.title} fill />
                        </div>
                    </div>
                    <div className="col-span-2 row-span-3">

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

                    <div className="flex flex-col sm:flex-row justify-between w-full">

                        <h3 className="text-xl font-bold w-1/3">PRODUCT DETAILS</h3>
                        <p className="text-lg w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa incidunt porro cum excepturi est, obcaecati aut minus ratione reprehenderit aliquam, quia eveniet necessitatibus nulla perferendis nobis! Nostrum facilis dolorum eveniet dignissimos aliquid explicabo, eos, quis voluptate corporis ipsam distinctio ratione accusantium quibusdam voluptates excepturi repellendus nam perspiciatis non molestias facere.</p>

                    </div>

                    <div className="flex flex-col sm:flex-row justify-between w-full">

                        <h3 className="text-xl font-bold w-1/3">PRODUCT DETAILS</h3>
                        <ul className="flex flex-col gap-4 mx-12 w-2/3 list-disc font-semibold">
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
