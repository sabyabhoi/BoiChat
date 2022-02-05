import { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { supabase } from '../supabaseClient';

const Navbar = () => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());

  const signIn = async () => {
    const { user } = await supabase.auth.signIn({
      provider: 'discord',
    });
    setUser(user);
  };

  return (
    <header className='py-3 flex items-center justify-between'>
      <h5 className='text-2xl font-bold text-blue'>Boi Chat</h5>
      {user === null ? (
        <button className='flex flex-row gap-x-2 items-center' onClick={signIn}>
          <BsGoogle /> Sign in
        </button>
      ) : (
        <h4 className='text-red text-md font-bold'>{user.user_metadata.full_name}</h4>
      )}
    </header>
  );
};

export default Navbar;
