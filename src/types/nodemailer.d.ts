
declare module 'nodemailer' {
  import { Readable } from 'stream';

  export type SendMailOptions = {
    from?: string | Address;
    to?: string | string[] | Address | Address[];
    cc?: string | string[] | Address | Address[];
    bcc?: string | string[] | Address | Address[];
    subject?: string;
    text?: string | Buffer | Readable;
    html?: string | Buffer | Readable;
    attachments?: Attachment[];
    replyTo?: string | Address;
  };

  export type Address = {
    name: string;
    address: string;
  };

  export type Attachment = {
    filename: string;
    content?: any;
    path?: string;
    contentType?: string;
    cid?: string;
  };

  export type SentMessageInfo = {
    messageId: string;
    envelope: {
      from: string;
      to: string[];
    };
    accepted: string[];
    rejected: string[];
    pending: string[];
    response: string;
  };

  export type Transporter = {
    sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo>;
  };

  export function createTransport(transport?: any, defaults?: any): Transporter;
}
