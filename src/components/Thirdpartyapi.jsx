import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Thirdpartyapi() {

    const [data, setdata] = useState([])
    const [limit,setlimit]= useState(5)
    const [page,setpage]= useState(1)
    const [totalitem,settotalitem]=useState(0)
    const fetchdata = async () => {
        try {
            const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`
            const res = await axios.get(url)
            setdata(res?.data?.data?.data)
            console.log(res?.data?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [limit,page])

    return (
        <div>
            <div className='flex justify-between p-3 m-3 text-2xl '> 
                <h1>Total Product - {totalitem}</h1>
                <div className='flex'>
                    <h1>All users</h1>
                {/* <select name="" id="" onClick={()}  >
                    {
                        [5,10,20,50,100].map((range,index)=>(
                            <option className='' key={index} > {range}</option>
                        ))
                    }
                </select> */}
                </div>

            </div>
            <div  className='grid p-5 gap-1 sm:gap-2 md:gap-3 ls:gap-4 xl:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {
                    data.map((items, index) => (
                        <div key={index}  className='flex flex-col bg-white text-black rounded-2xl'>
                            <img src={items?.picture?.large} alt="" />
                            <div className='flex gap-2'>
                                <h1>{items?.name?.title}</h1>
                                <h1>{items?.name?.first}</h1>
                                <h1>{items?.name?.last}</h1>
                            </div>
                            <h1>{items?.gender}</h1>
                        </div>

                    ))


                }

            </div>
        </div>
    )
}
