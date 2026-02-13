export type ChannelType = 'text' | 'voice' | 'announcement';

export interface Channel {
  id: string;
  serverId: string;
  name: string;
  type: ChannelType;
  topic: string | null;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DMChannel {
  id: string;
  participantIds: [string, string];
  createdAt: Date;
}
