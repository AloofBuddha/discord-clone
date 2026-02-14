import { useState } from 'react';

export const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    {
      id: 1,
      username: 'System',
      content: 'Welcome to your Discord Clone! 🎉',
      timestamp: new Date(),
      avatar: '🤖'
    },
    {
      id: 2,
      username: 'Dev Bot',
      content: 'This is a work in progress. Real-time messaging coming soon!',
      timestamp: new Date(),
      avatar: '👨‍💻'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // TODO: Implement real message sending
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Channel Header */}
      <div className="h-12 border-b border-[#202225] flex items-center px-4 bg-[#36393f] shadow-sm">
        <span className="text-[#8e9297] mr-2 text-xl font-bold">#</span>
        <h3 className="text-white font-semibold text-base">general</h3>
        <div className="ml-4 text-[#72767d] text-sm">
          Welcome to #general
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <svg className="w-5 h-5 text-[#b9bbbe] hover:text-[#dcddde] cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V4C10 2.89543 10.8954 2 12 2Z"/>
          </svg>
          <svg className="w-5 h-5 text-[#b9bbbe] hover:text-[#dcddde] cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path d="M10 4a2 2 0 100-4 2 2 0 000 4z"/>
            <path d="M10 20a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
          <div className="flex items-center bg-[#202225] rounded px-2 py-1">
            <svg className="w-4 h-4 text-[#8e9297] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <span className="text-[#8e9297] text-sm">Search</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-4 hover:bg-[#32353b] -mx-2 px-2 py-2 rounded group">
            <div className="w-10 h-10 rounded-full bg-[#5865f2] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-lg font-semibold">{msg.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline space-x-2 mb-1">
                <span className="text-[#dcddde] font-medium text-base hover:underline cursor-pointer">
                  {msg.username}
                </span>
                <span className="text-[#72767d] text-xs font-medium">
                  Today at {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                </span>
              </div>
              <div className="text-[#dcddde] text-[15px] leading-[22px] break-words">
                {msg.content}
                {msg.id === 1 && (
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center space-x-1 text-[#72767d] hover:text-[#dcddde] cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-xs">👋</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
              <button className="p-1 text-[#b9bbbe] hover:text-[#dcddde] hover:bg-[#36393f] rounded">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path d="M10 4a2 2 0 100-4 2 2 0 000 4z"/>
                  <path d="M10 20a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="px-4 pb-6 pt-2">
        <form onSubmit={handleSendMessage}>
          <div className="relative bg-[#40444b] rounded-lg">
            <div className="flex items-center px-4 py-3">
              <button type="button" className="mr-4 text-[#b9bbbe] hover:text-[#dcddde] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V4C10 2.89543 10.8954 2 12 2Z"/>
                </svg>
              </button>
              
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Message #general`}
                className="flex-1 bg-transparent text-[#dcddde] placeholder-[#72767d] focus:outline-none text-[15px]"
              />
              
              <div className="flex items-center space-x-3 ml-4">
                <button type="button" className="text-[#b9bbbe] hover:text-[#dcddde] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </button>
                
                <button type="button" className="text-[#b9bbbe] hover:text-[#dcddde] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-1V6a4 4 0 10-8 0v1H7a2 2 0 00-2 2v2h2zm0-5a2 2 0 114 0v1H9V6z"/>
                  </svg>
                </button>
                
                <button type="button" className="text-[#b9bbbe] hover:text-[#dcddde] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM21 9V7L15 13L13.5 7H10.5L9 13L3 7V9L8.5 15H15.5L21 9Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};