export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotourl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}