import type { NextComponentType } from 'next';

const MessageBox: NextComponentType = () => {
  return (
    <div className='flex flex-row gap-x-1 pb-4'>
      <textarea
        placeholder='Enter your message here'
        className='outline-none flex-grow-[6] bg-secondary-lite resize-none rounded-md'
      ></textarea>
      <button className='flex-grow bg-red-dark hover:bg-red text-secondary font-bold text-lg rounded-md'>
        Send
      </button>
    </div>
  );
};

export default MessageBox;
