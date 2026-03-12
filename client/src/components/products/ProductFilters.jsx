const ProductFilters = ({ search, setSearch, setCategory }) => {

    return (

        <div className="bg-white p-6 rounded shadow h-fit">

            <h3 className="font-semibold mb-4">
                Search
            </h3>

            <input
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border w-full p-2 mb-6 rounded"
            />

            <h3 className="font-semibold mb-3">
                Category
            </h3>

            <div className="flex flex-col gap-3">

                <button onClick={() => setCategory("all")}>
                    All Products
                </button>

                <button onClick={() => setCategory("helmet")}>
                    Helmets
                </button>

                <button onClick={() => setCategory("bag")}>
                    Bags
                </button>

                <button onClick={() => setCategory("accessories")}>
                    Accessories
                </button>

            </div>

        </div>

    )

}

export default ProductFilters