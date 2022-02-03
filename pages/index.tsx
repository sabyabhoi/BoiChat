import type { NextPage } from 'next';
import Message from './components/message';
import MessageBox from './components/messageBox';

const Main: NextPage = () => {
  return (
    <div className='container mx-auto flex flex-col justify-between h-screen'>
      <div className='overflow-y-auto'>
      	<Message />
      	<Message />
      	<Message />
      	<Message />
      </div>
			<div>
				<MessageBox />
			</div>
    </div>
  );
};

export default Main;
