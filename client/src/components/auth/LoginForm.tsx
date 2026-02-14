import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(email, password);
    if (!result.success) {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#36393f] rounded-lg shadow-2xl p-8">
      {error && (
        <div className="bg-[#f04747] text-white p-3 rounded-md mb-6 text-sm flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[#b9bbbe] text-xs font-bold uppercase tracking-wide mb-2">
            Email or Phone Number <span className="text-[#f04747]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#202225] border border-[#202225] rounded-md text-[#dcddde] placeholder-[#72767d] focus:outline-none focus:border-[#00b0f4] transition-colors text-base"
            placeholder=""
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-[#b9bbbe] text-xs font-bold uppercase tracking-wide mb-2">
            Password <span className="text-[#f04747]">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#202225] border border-[#202225] rounded-md text-[#dcddde] placeholder-[#72767d] focus:outline-none focus:border-[#00b0f4] transition-colors text-base"
            placeholder=""
            disabled={loading}
          />
        </div>

        <button
          type="button"
          className="text-[#00b0f4] text-sm hover:underline"
        >
          Forgot your password?
        </button>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5865f2] hover:bg-[#4752c4] disabled:bg-[#4752c4] disabled:opacity-50 text-white font-medium py-3 px-4 rounded-md transition-colors text-base"
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <p className="text-[#72767d] text-sm mt-6">
        Need an account?{' '}
        <button
          onClick={onSwitchToRegister}
          className="text-[#00b0f4] hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
};