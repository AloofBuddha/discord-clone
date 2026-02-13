export type MessageType = 'text' | 'image' | 'file' | 'system';

export interface MessageAttachment {
  id: string;
  filename: string;
  url: string;
  contentType: string;
  size: number;
}

export interface Message {
  id: string;
  channelId: string;
  authorId: string;
  content: string;
  type: MessageType;
  attachments: MessageAttachment[];
  editedAt: Date | null;
  createdAt: Date;
}

export interface MessageReaction {
  messageId: string;
  emoji: string;
  userIds: string[];
  count: number;
}
