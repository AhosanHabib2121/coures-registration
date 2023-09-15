import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import SingleCard from "../singleCard/SingleCard";
import Swal from 'sweetalert2'

const Cards = () => {
    // cards all data from course_data json
    const [cardsAllData, setCardsAllData] = useState([]);

    //useSete form select btn click data here
    const [selectData, setSelectData] = useState([]);
    //totalCredit
    const [totalCredit, setTotalCredit] = useState(0);
    // remaining credit
    const [remainingCredit, setRemainingCredit] = useState(20);

    // useEffect use for get json data
    useEffect(() => {
        fetch('./course_data.json')
            .then(res => res.json())
            .then(cardData => setCardsAllData(cardData))
    }, [])

    // select btn handle function here
    const handleSelect = (cardData) => {
        const isExist = selectData.find(item => item.id === cardData.id);
        let creditHour = cardData.credit;

        if (isExist) {
            Swal.fire({
                icon: 'error',
                title: 'Already Taken!',
                text: 'Please try another card click.',
            })
        } else {
            selectData.forEach(dataSingle => {
                creditHour = creditHour + dataSingle.credit;
            })
            const remainingHour = 20 - creditHour;
            if (creditHour > 20) {
                Swal.fire({
                    icon: 'error',
                    title: 'Credit is end',
                })
            }
            else {
                setTotalCredit(creditHour);
                setRemainingCredit(remainingHour);
                const selectDataStor = [...selectData, cardData];
                setSelectData(selectDataStor);
            }
                
        }
    }
    return (
        <>
            <div className="flex gap-6 pb-20">
                {/* singleCard area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12">
                    {
                        cardsAllData.map(cardData => <SingleCard
                            key={cardData.id}
                            cardData={cardData}
                            handleSelect={handleSelect}
                        > </SingleCard>)
                    }
                </div>

                {/* cart area */}
                <div className="w-3/12">
                    <Cart
                        selectData={selectData}
                        totalCredit={totalCredit}
                        remainingCredit={remainingCredit}
                    >
                    </Cart>   
                </div>
            </div>
        </>
    );
};

export default Cards;