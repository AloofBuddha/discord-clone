import { useAuth } from './contexts/AuthContext'
import { AuthPage } from './components/auth/AuthPage'
import { MainLayout } from './components/layout/MainLayout'
import { ChatInterface } from './components/chat/ChatInterface'
import './App.css'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <AuthPage />
  }

  return (
    <MainLayout>
      <ChatInterface />
    </MainLayout>
  )
}

export default App