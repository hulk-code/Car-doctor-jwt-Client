
import { AiFillDelete } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const BookingCard = ({ book, handleDelete, handelConfirm }) => {
    console.log(book)
    // eslint-disable-next-line react/prop-types
    const { _id, customerName, service, email, date, img, status } = book;

    return (

        <tr>
            <th>
                <label>

                    <button className="btn btn-circle btn-outline" onClick={() => handleDelete(_id)} >
                        <AiFillDelete className="text-2xl"></AiFillDelete>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{date}</td>
            <th>
                {status === 'confirm' ? <span><button className="btn btn-primary">Approved</button></span> :
                    <button className="btn btn-ghost btn-xs" onClick={() => handelConfirm(_id)} >Confirm</button>}
            </th>
        </tr>

    );
};

export default BookingCard;