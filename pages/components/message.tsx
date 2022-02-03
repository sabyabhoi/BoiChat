import type { NextComponentType } from 'next';
import Image from 'next/image';
import profile_pic from '../../public/profile_pic.png';

const Message: NextComponentType = () => {
  return (
    <div className='flex flex-row align-middle border-t-2 border-t-mute border-opacity-30 gap-x-3 pt-2'>
      <div className='w-28 pt-2'>
        <Image src={profile_pic} className='rounded-lg' />
      </div>
      <div className='flex flex-col'>
        <h5 className='text-lg font-bold text-red'>CognusBoi</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a enim et
          est consectetur convallis in ac purus. Morbi nunc magna, imperdiet et
          tortor ac, tincidunt condimentum felis. Integer vitae consectetur
          lacus. Nulla convallis tellus nisi, eu elementum metus sollicitudin
          ultrices. Aliquam egestas lectus id semper pellentesque
        </p>
        <div className='self-end text-mute'>8:41 PM</div>
      </div>
    </div>
  );
};

export default Message;
