import { Channel, ChannelHeader, Chat, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

// app 연결
const client = StreamChat.getInstance('3swqmtxqgp4q');

function App() {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    async () => {
      // stream 연결
      await client.setGuestUser({
        id: String(Math.floor(Math.random() * Date.now())),
        name: 'Anonymous',
      });

      // 채널
      const channel = await client.channel('public-chat', 'blabla', {
        name: 'Bla Bla Channel!',
      });
      setChannel(channel);
    };
  });

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
        </Window>
      </Channel>
    </Chat>
  );
}

export default App;
