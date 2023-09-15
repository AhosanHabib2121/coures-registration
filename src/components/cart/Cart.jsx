import PropTypes from "prop-types";

const Cart = ({ selectData,totalCredit,remainingCredit }) => {
    let count = 1;
  return (
    <div>
        <div className=" bg-white px-6 py-6 rounded-xl">
              <h1 className="text-[#2F80ED] font-bold text-lg mb-2">Credit Hour Remaining {remainingCredit} hr</h1>
              <div className="border mb-2"></div>
            <div>
                <h2 className="font-bold text-lg mb-4">Course Name</h2>
                  <div>
                      <ol className="space-y-2">
                        {
                              selectData.map(data => <li className="text-[#181717c9] font-normal text-sm" key={data.id}>{ count++}  {data.course_name }</li>)
                        }
                      </ol>
                </div>
                <div className="border mt-4 mb-3"></div>
                  <h2 className=" text-base font-medium">Total Credit Hour : { totalCredit}</h2>
            </div>  

        </div>
    </div>
  )
}
Cart.propTypes = {
    selectData:PropTypes.object.isRequired,
    totalCredit:PropTypes.number,
    remainingCredit:PropTypes.number,
}
export default Cart
