import Image from 'next/image';
import MessageProps from '../interfaces/MessageProps';
import { FC } from 'react';

import profile_pic from '../../public/profile_pic.png';

const Message: FC<MessageProps> = ({
  name,
  content,
  timestamp,
}: MessageProps) => {
  return (
    <div className='flex flex-row align-middle border-t-2 border-t-mute border-opacity-30 gap-x-3 pt-2'>
      <div className='w-28 pt-2'>
        <Image src={profile_pic} className='rounded-lg' />
      </div>
      <div className='flex flex-col'>
        <h5 className='text-lg font-bold text-red'>{name}</h5>
        <p>{content}</p>
        <div className='self-end text-mute'>
          {timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Message;
