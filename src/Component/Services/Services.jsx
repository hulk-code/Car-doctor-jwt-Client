import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../ServiceCard/ServiceCard";




const Services = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl text-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5">
                    {
                        cards.map(card =><ServicesCard key={card._id} card={card}></ServicesCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;