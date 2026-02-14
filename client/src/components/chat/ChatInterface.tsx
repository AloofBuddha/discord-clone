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
      <div className="h-12 border-b border-gray-600 flex items-center px-4 bg-gray-600">
        <span className="text-gray-400 mr-2">#</span>
        <h3 className="text-white font-semibold">general</h3>
        <div className="ml-4 text-gray-400 text-sm">
          Welcome to #general
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-3 hover:bg-gray-600 -mx-2 px-2 py-1 rounded">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">{msg.avatar}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white font-medium text-sm">{msg.username}</span>
                <span className="text-gray-400 text-xs">
                  {msg.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message #general"
              className="w-full bg-gray-600 text-white rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 disabled:bg-gray-500 text-white rounded flex items-center justify-center hover:bg-blue-700 disabled:hover:bg-gray-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};