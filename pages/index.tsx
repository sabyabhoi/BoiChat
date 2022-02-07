import type { GetServerSideProps, NextPage } from 'next';
import MessageList from './components/messageList';
import ChatBox from './components/chatBox';
import Navbar from './components/navbar';
import MessageProps from './types';
import { supabase } from './supabaseClient';

const Main: NextPage<{ data: Array<MessageProps> }> = ({ data }) => {
  return (
    <div className='container mx-auto flex flex-col justify-between h-screen max-h-screen gap-y-2'>
      <Navbar />
      <MessageList data={data} />
      <ChatBox />
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
