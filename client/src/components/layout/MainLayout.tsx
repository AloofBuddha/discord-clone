import { useAuth } from '../../contexts/AuthContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { user, logout } = useAuth();

  return (
    <div className="h-screen bg-gray-800 flex">
      {/* Server List Sidebar */}
      <div className="w-16 bg-gray-900 flex flex-col items-center py-3 space-y-2">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-2 cursor-pointer hover:rounded-lg transition-all">
          <span className="text-white font-bold text-lg">DC</span>
        </div>
        
        <div className="w-8 h-0.5 bg-gray-600 rounded-full"></div>
        
        {/* Placeholder servers */}
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
          <span className="text-white font-bold">S</span>
        </div>
        
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
          <span className="text-white font-bold">+</span>
        </div>
      </div>

      {/* Channels Sidebar */}
      <div className="w-60 bg-gray-700 flex flex-col">
        {/* Server Header */}
        <div className="h-12 border-b border-gray-800 flex items-center px-4 shadow-md">
          <h2 className="text-white font-semibold">My Server</h2>
        </div>

        {/* Channels List */}
        <div className="flex-1 p-2">
          <div className="mb-4">
            <div className="flex items-center text-gray-400 uppercase text-xs font-semibold mb-1 px-2">
              <span>Text Channels</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center px-2 py-1 rounded text-gray-300 hover:bg-gray-600 cursor-pointer">
                <span className="mr-2">#</span>
                <span className="text-sm">general</span>
              </div>
              <div className="flex items-center px-2 py-1 rounded text-gray-300 hover:bg-gray-600 cursor-pointer">
                <span className="mr-2">#</span>
                <span className="text-sm">random</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center text-gray-400 uppercase text-xs font-semibold mb-1 px-2">
              <span>Voice Channels</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center px-2 py-1 rounded text-gray-300 hover:bg-gray-600 cursor-pointer">
                <span className="mr-2">🔊</span>
                <span className="text-sm">General</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Area */}
        <div className="h-14 bg-gray-800 flex items-center px-2">
          <div className="flex items-center flex-1">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm font-bold">
                {user?.username?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">
                {user?.username || 'User'}
              </div>
              <div className="text-green-400 text-xs">Online</div>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-700 rounded flex items-center justify-center transition-colors"
            title="Logout"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-700">
        {children}
      </div>
    </div>
  );
};