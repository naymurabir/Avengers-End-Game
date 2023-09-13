import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, totalSalary }) => {
    return (

        <div className="md:w-1/3 text-base bg-gray-200 p-2 m-2 rounded-md 
        mt-6">
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
    totalSalary: PropTypes.number.isRequired
}

export default Bookmarks;