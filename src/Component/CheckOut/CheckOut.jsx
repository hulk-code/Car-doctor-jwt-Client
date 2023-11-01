import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const checkOutData = useLoaderData()
    const { user } = useContext(AuthContext)
    const{_id , title ,price ,  img}=checkOutData
    const handleCheckedOut=e =>{
        e.preventDefault()
        const form=e.target;
        const name=user?.displayName
        const date=form.date.value
        const phone=form.phone.value
        const email=user?.email
        const price=form.amount.value
        const order={
            service:title,
            customerName:name,
            email,
            img,
            date,
            service_id:_id,
            price,
            phone
        }
       console.log(order);
       fetch('http://localhost:3000/booking',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(order)
       })
       .then(res =>res.json())
       .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
       })
    }

    return (
        <div>

            
            <div>
                <h2>Book Services{title}</h2>
                <form onSubmit={handleCheckedOut}>
                    <div className="grid grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">date</span>
                            </label>
                            <input type="date" placeholder="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" name='phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number" defaultValue={price} name='amount' className="input input-bordered" required />
                        </div>

                    </div >
                    <button className="  btn-primary btn-block mt-5 mb-5" type="submit" value='order confirm'>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;