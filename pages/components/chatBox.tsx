import type { NextComponentType } from 'next';

const ChatBox: NextComponentType = () => {
  return (
    <div className='flex flex-row gap-x-1 pb-4'>
      <textarea
        placeholder='Enter your message here'
        className='outline-none flex-grow-[8] bg-secondary-lite resize-none rounded-md'
      ></textarea>
      <button className='flex-grow'>Send</button>
    </div>
  );
};

export default ChatBox;
