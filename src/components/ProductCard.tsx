import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


const ProductCard = ({ title, price, clothingCategory, linkText, picture }: { title: string, price: string, clothingCategory: string, linkText: string, picture: string, }) => {
    return (
        <Link href={`/products/${linkText}`}>
            <Card className="hover:scale-110 transition">
                <CardHeader>
                    <Image src={picture} alt={title} width={250} height={270} />
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-lg">{clothingCategory}</CardDescription>
                    <h2 className="font-bold text-xl">{price}</h2>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProductCard
