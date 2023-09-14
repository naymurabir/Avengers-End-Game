import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, totalSalary, totalCost, remaining }) => {
    console.log(remaining);

    return (

        <div className="md:w-1/3 text-base bg-gray-200 p-2 m-2 rounded-md 
        mt-6">

            <div>
                <h3 className="text-xl mt-3 font-semibold ml-4">Total Cost: {totalCost}</h3>
                <h3 className="text-xl mt-3 font-semibold ml-4">Remaining Balance: {remaining} </h3>
            </div>

            <div>
                <h2 className="text-xl mt-3 font-semibold ml-4">Total Cost: ${totalSalary} </h2>
            </div>
            <h3 className="text-xl mt-3 font-semibold ml-4">Bookmarks: {bookmarks.length} </h3>

            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    totalSalary: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default Bookmarks;