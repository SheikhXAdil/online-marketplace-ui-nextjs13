'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const links = [
    {
        title: "Female",
        linkText: "female"
    },
    {
        title: "Male",
        linkText: "male"
    },
    {
        title: "Kids",
        linkText: "kids"
    },
    {
        title: "All products",
        linkText: "products"
    },
]

const Menu = () => {
    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex-col lg:flex-row gap-y-4 lg:gap-x-8">
                {links.map((link, index) => {
                    return (
                        <Link href={`/${link.linkText}`} key={index}>
                            <NavigationMenuItem className="text-lg font-medium cursor-pointer">{link.title}</NavigationMenuItem>
                        </Link>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Menu
