import { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { SiDiscord } from 'react-icons/si';

const Navbar = () => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());

  const signIn = async () => {
    const { user } = await supabase.auth.signIn({
      provider: 'discord',
    });
    setUser(user);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className='py-3 flex items-center justify-between'>
      <h5 className='text-2xl font-bold text-blue'>Boi Chat</h5>
      {user === null ? (
        <button className='flex flex-row gap-x-2 items-center' onClick={signIn}>
          <SiDiscord /> Sign in
        </button>
      ) : (
        <div className='flex flex-row items-center gap-x-2'>
          <h4 className='text-red text-lg font-bold'>
            signed in as {user!.user_metadata.full_name}
          </h4>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
