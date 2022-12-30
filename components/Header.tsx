import Link from 'next/link';

function Header() {
  return (
    <header className="md:px-20 flex justify-between p-5 lg:px-40 mx-auto  bg-yellow-400">
      <div className="flex items-center space-x-5">
        <Link legacyBehavior href={'/'}>
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="Medium"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>Our story</h3>
          <h3>Membership</h3>
          <h3>Write</h3>
        </div>
        <h3>Sign In</h3>
        <h3 className="border border-black px-4 py-1 rounded-full bg-black text-white">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
