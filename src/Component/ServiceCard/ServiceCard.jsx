import { Link } from "react-router-dom";


const ServicesCard = ({ card }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, img, title } = card;
    return (
        <div>
            <div >
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to={`/checkout/${_id}`}>  <button className="btn btn-primary">Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard; 