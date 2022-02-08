import type { GetServerSideProps, NextPage } from 'next';
import MessageList from '../components/messageList';
import ChatBox from '../components/chatBox';
import Navbar from '../components/navbar';
import MessageProps from '../components/types';
import { supabase } from '../components/supabaseClient';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';

const Main: NextPage<{ data: Array<MessageProps> }> = ({ data }) => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());
  const [loading, setLoading] = useState<Boolean>(false);
  return (
    <div className='container mx-auto flex flex-col justify-between h-screen max-h-screen gap-y-2'>
      <Navbar
        user={user}
        setUser={setUser}
        loading={loading}
        setLoading={setLoading}
      />
      <MessageList data={data} />
      <ChatBox user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await supabase.from<MessageProps>('messages').select('*');

  return {
    props: {
      data: data.body,
    },
  };
};

export default Main;
