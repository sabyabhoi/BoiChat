import { User } from '@supabase/supabase-js';
import { ChangeEvent, useState } from 'react';
import { supabase } from './supabaseClient';
// import MessageProps from '../types';

const ChatBox: React.FC<{ user: User | null }> = ({ user }) => {
  const [msgContent, setMsgContent] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMsgContent(e.target.value);
  };

  const sendMessage = async () => {
    if (user === null) {
      alert('sign in to send a message');
      return;
    } else if (msgContent.length === 0) {
      alert('Empty messages not allowed!');
      return;
    }

    const { data, error } = await supabase.from('messages').insert([
      {
        avatar: user!.user_metadata.avatar_url,
        username: user!.user_metadata.name,
        content: msgContent,
        created_at: new Date(),
      },
    ]);
		setMsgContent('');
  };

  return (
    <div className='flex flex-row gap-x-1 pb-4'>
      <textarea
        placeholder='Enter your message here'
        className='outline-none flex-grow-[10] bg-secondary-lite resize-none rounded-md'
        onChange={inputHandler}
				value={msgContent}
      ></textarea>
      <button className='flex-grow bg-blue' type='submit' onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
