import Search from "./Search";
import PropTypes from 'prop-types';

export default function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-[url('../assets/bg3.jpg')]  bg-no-repeat bg-cover relative lg:h-[500px] md:h-[600px] sm:px-5 px-2 lg:px-20 ">
      <div className=" bg-black opacity-70 absolute w-full h-full top-0 left-0"></div>
      <div className="relative z-10 ">
        <div className="flex items-center justify-between py-3">
          <Head />
          <SignInButton />
        </div>
        <div className=" text-white text-center py-10">
          <h1 className="text-6xl font-bold mb-4 text-wrap">
            Search for your favorite movies
          </h1>
          <p className="mb-6 text-xl px-5">
            We have an extensive collection of movies for you to explore.
          </p>
          <h1 className="text-4xl perspective-origin-center  text-shadow-blue-950 shadow font-bold mb-4">
            FOR FREE
          </h1>
        </div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
}

function Head() {
  return (
    <header className=" py-2">
      <h1 className=" text-nowrap lg:text-4xl md:text-3xl text-xl text-shadow-lg text-shadow-purple-600 font-black text-blue-300">
        🍿Moo-vies
      </h1>
    </header>
  );
}

function SignInButton() {
  return (
    <button className=" hover:bg-blue-800 px-3 py-1 text-white text-nowrap rounded-md bg-blue-600 font-medium" title="This ain't working yet">
      Sign In
    </button>
  );
}

Hero.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
