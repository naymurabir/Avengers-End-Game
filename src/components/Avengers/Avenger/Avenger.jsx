import PropTypes from 'prop-types';

const Avenger = ({ avenger, handleAddToBookmarks, handleAddTotalSalary }) => {

    const { image, name, salary, role } = avenger
    return (

        <div className='border-2 border-gray-300 w-[300px] space-y-2 mb-3 p-5 mt-5 rounded-md text-center'>

            <img className='w-full rounded-md ' src={image} alt="" />

            <h3 className='text-lg font-bold'> {name} </h3>

            <h3>Quotes: The quick foz run over the lazy dog. </h3>

            <div className='flex justify-between'>
                <h4> <span className='font-bold'>Salary:</span> ${salary} </h4>
                <h4> <span className='font-bold'>Role:</span> {role} </h4>
            </div>

            <button onClick={() => { handleAddToBookmarks(avenger) }} className='text-white bg-green-500 px-2 py-2 rounded-md'>Select</button>

            <button onClick={() => { handleAddTotalSalary(salary) }} className='text-white bg-green-500 px-2 py-2 rounded-md ml-3'> Hire</button>
        </div>
    );
};


Avenger.propTypes = {
    avenger: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleAddTotalSalary: PropTypes.func.isRequired
}

export default Avenger;