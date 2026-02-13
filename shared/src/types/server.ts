export interface Server {
  id: string;
  name: string;
  iconUrl: string | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MemberRole = 'owner' | 'admin' | 'moderator' | 'member';

export interface ServerMember {
  userId: string;
  serverId: string;
  nickname: string | null;
  role: MemberRole;
  joinedAt: Date;
}

export interface ServerInvite {
  id: string;
  serverId: string;
  createdBy: string;
  code: string;
  maxUses: number | null;
  uses: number;
  expiresAt: Date | null;
  createdAt: Date;
}
