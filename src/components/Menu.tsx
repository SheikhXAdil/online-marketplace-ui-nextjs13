'use client'
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const categories = ["Female", "Male", "Kids", "All Products"]

const Menu = () => {
    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex-col lg:flex-row gap-y-4 lg:gap-x-8">
                {categories.map((category, index) => {
                    return (
                        <NavigationMenuLink key={index} className="text-lg font-medium cursor-pointer">{category}</NavigationMenuLink>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Menu
