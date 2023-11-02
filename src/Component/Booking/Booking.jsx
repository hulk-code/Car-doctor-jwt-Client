import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const[booked ,setBooked]=useState([])
    const url = `http://localhost:3000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
               setBooked(data)
            })
    }, [url])

    const handleDelete= id =>{
        const proceed=confirm('are you sure to delete')
        if(proceed){
            fetch(`http://localhost:3000/booking/${id}`,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('deletd successFull')
                    const remaining=booked.filter(datas => datas._id !== id)
                    setBooked(remaining)
                }
            })
        }
    }
    const handelConfirm= id =>{
        fetch(`http://localhost:3000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data. modifiedCount > 0){
                const remainig=booked.filter(book => book._id !== id)
                const update=booked.find(book => book._id===id)
                update.status='confirm'
                const newBooking=[update ,...remainig]
                setBooked(newBooking);

            }
        })

    }
    // const handelConfirm=id=>{
    //     fetch(`http://localhost:3000/bookings/${id}`,{
    //         method:"PATCH",
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify({status:'confirm'})

    //     })
    //     .then(res=> res.json())
    //     .then(data =>{
    //         console.log(data)
    //         if(data. modifiedCount >0){
    //             const remainig=booked.filter(book => book._id !== id)
    //             const update=booked.find(book => book._id===id)
    //             update.status='confirm'
    //             const newBooking=[update ,...remainig]
    //             setBooked(newBooking);

    //         }
    //     })

    // }
    return (
        <div>
            <p>{booked.length}</p>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        booked.map(book => <BookingCard key={book._id} book={book} handleDelete={handleDelete} handelConfirm={handelConfirm}></BookingCard>)
     }
    
      
      
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Booking;