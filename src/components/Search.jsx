import PropTypes from 'prop-types';

export default function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }



 
  return (
    <div className="flex justify-center items-center py-5 ">
      <div
        className="w-fit border min-w-[300px] flex items-center rounded-sm p-5 gap-2 backdrop-blur-lg border-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
          fill="gray"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          onChange={handleSearch}
          value={searchTerm}
          type="search"
          placeholder="Search..."
          className=" w-full border-none outline-none bg-transparent text-gray-200 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}


Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
