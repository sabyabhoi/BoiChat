import type { GetServerSideProps, NextPage } from 'next';
import Message from './components/message';
import MessageBox from './components/messageBox';
import MessageProps from './types';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';

const Main: NextPage<{ data: Array<MessageProps> }> = ({ data }) => {
  const [msgList, setMsgList] = useState<Array<MessageProps>>(data);

  // INFO: Don't touch this
  const msgSubs = supabase
    .from<MessageProps>('messages')
    .on('INSERT', (message) => {
      setMsgList((oldMsg) => {
        return oldMsg.concat(message.new);
      });
      console.log(msgList);
    })
    .subscribe();

  return (
    <div className='container mx-auto flex flex-col justify-between h-screen'>
      <div className='overflow-y-auto'>
        {msgList.map((msg: MessageProps) => (
          <Message
            key={msg.id}
            id={msg.id}
            username={msg.username}
            content={msg.content}
            created_at={new Date(msg.created_at)}
          />
        ))}
      </div>
      <div>
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
