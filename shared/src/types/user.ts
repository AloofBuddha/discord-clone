export type UserStatus = 'online' | 'idle' | 'dnd' | 'offline';

export interface User {
  id: string;
  username: string;
  discriminator: string;
  email: string;
  avatarUrl: string | null;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  userId: string;
  displayName: string | null;
  bio: string | null;
  bannerColor: string | null;
}

export type PublicUser = Pick<User, 'id' | 'username' | 'discriminator' | 'avatarUrl' | 'status'>;
