import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import MessageProps from '../types';
import Message from './message';

const MessageList: NextPage<{ data: Array<MessageProps> }> = ({ data }) => {
  const [msgList, setMsgList] = useState<Array<MessageProps>>(data);

  // INFO: Don't touch this
  useEffect(() => {
    const msgSubs = supabase
      .from<MessageProps>('messages')
      .on('INSERT', (message) => {
        setMsgList((oldMsg) => {
          return oldMsg.concat(message.new);
        });
        console.log(msgList);
      })
      .subscribe();
  }, []);
  return (
    <div className='flex flex-col-reverse overflow-y-auto'>
      {msgList
        .slice(0)
        .reverse()
        .map((msg: MessageProps) => (
          <Message
            key={msg.id}
            id={msg.id}
            username={msg.username}
            content={msg.content}
            created_at={new Date(msg.created_at)}
          />
        ))}
    </div>
  );
};

export default MessageList;
