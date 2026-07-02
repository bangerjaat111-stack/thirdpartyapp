
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Gethookapi() {
    const [data, setdata] = useState([])
    const fetchdata = async () => {
        try {
            const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=30&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech'
            const res = await axios.get(url)
            setdata(res?.data?.data?.data)
            console.log(res?.data?.data?.data)


        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        fetchdata()

    })

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Books Collection
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                        >
                            <div className="h-64 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={items.volumeInfo?.imageLinks?.thumbnail}
                                    alt={items.volumeInfo?.title || "Book image"}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                                    {items.volumeInfo?.title || "No Title"}
                                </h2>

                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                    {items.volumeInfo?.subtitle || "No subtitle available"}
                                </p>

                                <div className="mt-4 space-y-2 text-sm">
                                    <p className="text-blue-600 font-medium">
                                        Category:{" "}
                                        <span className="text-gray-700">
                                            {items.volumeInfo?.categories?.[0] || "N/A"}
                                        </span>
                                    </p>

                                    <p className="text-gray-600">
                                        Maturity:{" "}
                                        <span className="font-medium">
                                            {items.volumeInfo?.maturityRating || "N/A"}
                                        </span>
                                    </p>

                                    <p className="text-gray-600">
                                        Published:{" "}
                                        <span className="font-medium">
                                            {items.volumeInfo?.publishedDate || "N/A"}
                                        </span>
                                    </p>
                                </div>

                                <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
