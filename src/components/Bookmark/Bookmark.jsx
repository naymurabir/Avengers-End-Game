import PropTypes from "prop-types"

const Bookmark = ({ bookmark }) => {
    const { name } = bookmark
    return (
        <div className="text-base bg-white shadow-md p-4 m-3 rounded-md">
            <h3 className="text-base font-bold"> {name} </h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;