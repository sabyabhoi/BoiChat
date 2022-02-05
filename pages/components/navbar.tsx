import { BsGoogle } from 'react-icons/bs';

const Navbar = () => {
  return (
    <header className='py-5 flex items-center justify-between'>
      <h5 className='text-2xl font-bold text-blue'>Boi Chat</h5>
      <button className='flex flex-row gap-x-2 items-center'>
        <BsGoogle /> Sign in
      </button>
    </header>
  );
};

export default Navbar;
