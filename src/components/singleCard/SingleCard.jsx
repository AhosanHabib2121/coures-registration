import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'

const SingleCard = ({ cardData }) => {
  const { image, course_name, details, price, credit } = cardData
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={image} alt="not found" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-sm">{course_name}</h2>
          <p className="text-[#181717c9] font-normal text-xs">{details}</p>
          <div className="flex justify-between gap-2 md:gap-0 mt-5">
            <div>
              <div className='flex gap-1'>
                <FiDollarSign></FiDollarSign>
                <h3 className="text-[#181717c9] font-normal text-xs">
                  Price : {price}
                </h3>
              </div>
            </div>
            <div>
              <div className='flex gap-1'>
                <HiOutlineBookOpen></HiOutlineBookOpen>
                <h3 className="text-[#181717c9] font-normal text-xs">
                  Credit : {credit}hr
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2">
            <button className="btn hover:bg-[#1866cc] bg-[#2F80ED] text-white w-full normal-case text-base font-semibold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
SingleCard.propTypes = {
  cardData: PropTypes.object.isRequired,
}
export default SingleCard
