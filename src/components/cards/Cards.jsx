import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import SingleCard from "../singleCard/SingleCard";

const Cards = () => {
    // cards all data from course_data json
    const [cardsAllData, setCardsAllData] = useState([]);

    // useEffect use for get json data
    useEffect(() => {
        fetch('./course_data.json')
            .then(res => res.json())
            .then(cardData => setCardsAllData(cardData))
    }, [])
    
    return (
        <>
            <div className="flex gap-6 pb-20">
                {/* singleCard area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3">
                    {
                        cardsAllData.map(cardData => <SingleCard key={cardData.id} cardData={cardData}> </SingleCard>)
                    }
                </div>

                {/* cart area */}
                <div className="w-3/1">
                    <Cart></Cart>   
                </div>
            </div>
        </>
    );
};

export default Cards;