import type { GetServerSideProps, NextPage } from 'next';
import Message from './components/message';
import MessageBox from './components/messageBox';
import MessageProps from './interfaces/MessageProps';
import { supabase } from './supabaseClient';

const Main: NextPage = ({ data }: any) => {
  /*  const data: MessageProps = {
    name: 'CognusBoi',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timestamp: new Date(),
  }; */

  console.log(data);

  return (
    <div className='container mx-auto flex flex-col justify-between h-screen'>
      <div className='overflow-y-auto'></div>
      <div>
        {data.map((msg: MessageProps) => (
          <Message
            username={msg.username}
            content={msg.content}
            created_at={new Date(msg.created_at)}
          />
        ))}
        <MessageBox />
      </div>
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
