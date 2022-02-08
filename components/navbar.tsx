// https://boi-chat.vercel.app/
import { User } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { SiDiscord } from 'react-icons/si';
import { useEffect } from 'react';

const Navbar: React.FC<{
  user: User | null;
  setUser: (userAuth: User | null) => void;
  loading: Boolean;
  setLoading: (loading: Boolean) => void;
}> = ({ user, setUser, loading, setLoading }) => {
  const signIn = async (e: any) => {
    //		e.preventDefault();
    setLoading(true);
    const { user } = await supabase.auth.signIn({
      provider: 'discord',
    });
    setUser(user);
    // supabase.auth.onAuthStateChange((event, session) => {
    //   console.log(event, session);
    // });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') setUser(session!.user);
    });
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  //	console.log(user);

  return (
    <header className='py-3 flex items-center justify-between'>
      <h5 className='text-2xl font-bold text-blue'>Boi Chat</h5>
      {user === null ? (
        <button className='flex flex-row gap-x-2 items-center' onClick={signIn}>
          <SiDiscord /> Sign in
        </button>
      ) : (
        <div className='flex flex-row items-center gap-x-5'>
          <h4 className='text-red text-lg font-bold'>
            Signed in as {user!.user_metadata.full_name}
          </h4>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
