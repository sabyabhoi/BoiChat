import type { NextPage } from 'next';
import Message from './components/message';
import MessageBox from './components/messageBox';
import MessageProps from './interfaces/MessageProps';
import { supabase } from './supabaseClient';

const Main: NextPage = () => {
  const messageData: MessageProps = {
    name: 'CognusBoi',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum turpis non ex blandit, id aliquet dolor tincidunt. Sed ullamcorper luctus orci quis finibus. Etiam erat augue, aliquet et erat id, imperdiet ultrices sapien. In semper justo magna, eu pulvinar leo commodo nec. Maecenas eu volutpat risus. Morbi mollis pellentesque ante, ut auctor metus interdum vel. Suspendisse potenti.',
    timestamp: new Date(),
  };

	supabase.from('messages').select('*').then(data => console.log(data));

  return (
    <div className='container mx-auto flex flex-col justify-between h-screen'>
      <div className='overflow-y-auto'>
        <Message
          name={messageData.name}
          content={messageData.content}
          timestamp={messageData.timestamp}
        />
        <Message
          name={messageData.name}
          content={messageData.content}
          timestamp={messageData.timestamp}
        />
        <Message
          name={messageData.name}
          content={messageData.content}
          timestamp={messageData.timestamp}
        />
        <Message
          name={messageData.name}
          content={messageData.content}
          timestamp={messageData.timestamp}
        />
      </div>
      <div>
        <MessageBox />
      </div>
    </div>
  );
};

/*export async function getServerSideProps() {
  const { data } = await supabase.from('messages').select('*');

  return { props: { data } };
} */

export default Main;
