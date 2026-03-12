import { useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"

const productsData = [
    {
        id: 1,
        name: "Adventure Helmet",
        price: 120,
        category: "helmet",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30"
    },

    {
        id: 2,
        name: "Riding Backpack",
        price: 80,
        category: "bag",
        image: "https://images.unsplash.com/photo-1520975922284-1b3f06b1c34b"
    },

    {
        id: 3,
        name: "Bike Gloves",
        price: 35,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },

    {
        id: 4,
        name: "Sport Helmet",
        price: 150,
        category: "helmet",
        image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0"
    },

    {
        id: 5,
        name: "Travel Bag",
        price: 90,
        category: "bag",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 6,
        name: "Bike Jacket",
        price: 200,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    }
]

const Products = () => {

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")

    const handleAddToCart = (product) => {
        console.log("Added to cart:", product)
    }

    const filteredProducts = productsData.filter((product) => {

        const matchSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchCategory =
            category === "all" || product.category === category

        return matchSearch && matchCategory

    })

    return (

        <div className="bg-[#f5f2eb] min-h-screen">

            <div className="container mx-auto px-4 py-12">

                <div className="mb-10">

                    <h1 className="text-4xl font-bold">
                        Our Products
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Discover the best riding gear and accessories
                    </p>

                </div>

                <div className="grid md:grid-cols-4 gap-10">

                    <ProductFilters
                        search={search}
                        setSearch={setSearch}
                        setCategory={setCategory}
                    />

                    <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Products