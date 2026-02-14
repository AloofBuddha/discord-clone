import { useAuth } from '../../contexts/AuthContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { user, logout } = useAuth();

  return (
    <div className="h-screen bg-[#36393f] flex">
      {/* Server List Sidebar */}
      <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 space-y-2">
        <div className="relative group">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl flex items-center justify-center mb-2 cursor-pointer group-hover:rounded-[16px] transition-all duration-200">
            <span className="text-white font-bold text-lg">DC</span>
          </div>
          {/* Active server indicator */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-8 bg-white rounded-r-full"></div>
        </div>
        
        <div className="w-8 h-0.5 bg-[#36393f] rounded-full my-2"></div>
        
        {/* Placeholder servers */}
        <div className="relative group">
          <div className="w-12 h-12 bg-[#36393f] rounded-3xl flex items-center justify-center cursor-pointer group-hover:bg-[#5865f2] group-hover:rounded-[16px] transition-all duration-200">
            <span className="text-[#dcddde] group-hover:text-white font-semibold text-lg">S</span>
          </div>
        </div>
        
        <div className="relative group">
          <div className="w-12 h-12 bg-[#36393f] rounded-3xl flex items-center justify-center cursor-pointer group-hover:bg-[#3ba55c] group-hover:rounded-[16px] transition-all duration-200 border-2 border-dashed border-[#3ba55c] border-opacity-50">
            <span className="text-[#3ba55c] font-bold text-xl">+</span>
          </div>
        </div>
      </div>

      {/* Channels Sidebar */}
      <div className="w-60 bg-[#2f3136] flex flex-col">
        {/* Server Header */}
        <div className="h-12 border-b border-[#202225] flex items-center px-4 shadow-sm">
          <h2 className="text-white font-semibold text-base">My Server</h2>
          <div className="ml-auto">
            <svg className="w-4 h-4 text-[#b9bbbe] hover:text-[#dcddde] cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>

        {/* Channels List */}
        <div className="flex-1 pt-4 px-2 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center text-[#8e9297] uppercase text-xs font-semibold tracking-wide mb-1 px-2 hover:text-[#dcddde] cursor-pointer">
              <span>Text Channels</span>
              <svg className="w-3 h-3 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center px-2 py-1.5 rounded text-[#dcddde] bg-[#393c43] cursor-pointer relative group">
                <span className="mr-2 text-[#8e9297]">#</span>
                <span className="text-sm font-medium">general</span>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
              </div>
              <div className="flex items-center px-2 py-1.5 rounded text-[#8e9297] hover:bg-[#393c43] hover:text-[#dcddde] cursor-pointer group">
                <span className="mr-2">#</span>
                <span className="text-sm">random</span>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center text-[#8e9297] uppercase text-xs font-semibold tracking-wide mb-1 px-2 hover:text-[#dcddde] cursor-pointer">
              <span>Voice Channels</span>
              <svg className="w-3 h-3 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center px-2 py-1.5 rounded text-[#8e9297] hover:bg-[#393c43] hover:text-[#dcddde] cursor-pointer group">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V4C10 2.89543 10.8954 2 12 2ZM19 12C19 16.9706 14.9706 21 10 21V19C13.866 19 17 15.866 17 12H19Z"/>
                </svg>
                <span className="text-sm">General</span>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* User Area */}
        <div className="h-[52px] bg-[#292b2f] flex items-center px-2">
          <div className="flex items-center flex-1 bg-[#36393f] rounded p-1 hover:bg-[#3c3f44] cursor-pointer transition-colors">
            <div className="relative">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm font-semibold">
                  {user?.username?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              {/* Online status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] rounded-full border-2 border-[#292b2f]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#dcddde] text-sm font-semibold truncate">
                {user?.username || 'User'}
              </div>
              <div className="text-[#b9bbbe] text-xs">#0001</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 ml-2">
            <button
              className="w-8 h-8 text-[#b9bbbe] hover:text-[#dcddde] hover:bg-[#3c3f44] rounded flex items-center justify-center transition-colors"
              title="Mute"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V4C10 2.89543 10.8954 2 12 2Z"/>
                <path d="M19 12C19 16.9706 14.9706 21 10 21V19C13.866 19 17 15.866 17 12H19Z"/>
              </svg>
            </button>
            
            <button
              className="w-8 h-8 text-[#b9bbbe] hover:text-[#dcddde] hover:bg-[#3c3f44] rounded flex items-center justify-center transition-colors"
              title="Deafen"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1C12.5523 1 13 1.44772 13 2V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V2C11 1.44772 11.4477 1 12 1Z"/>
                <path d="M18.364 5.636L19.778 7.05C21.1644 8.43644 21.9966 10.2677 21.9966 12.175C21.9966 14.0823 21.1644 15.9136 19.778 17.3L18.364 18.714C17.9735 19.1045 17.3403 19.1045 16.9498 18.714C16.5593 18.3235 16.5593 17.6903 16.9498 17.2998L18.364 15.886C19.3611 14.8889 19.9216 13.5616 19.9216 12.175C19.9216 10.7884 19.3611 9.46106 18.364 8.464L16.9498 7.05C16.5593 6.65948 16.5593 6.02631 16.9498 5.63579C17.3403 5.24526 17.9735 5.24526 18.364 5.636Z"/>
              </svg>
            </button>
            
            <button
              onClick={logout}
              className="w-8 h-8 text-[#b9bbbe] hover:text-[#dcddde] hover:bg-[#3c3f44] rounded flex items-center justify-center transition-colors"
              title="User Settings"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#36393f]">
        {children}
      </div>
    </div>
  );
};