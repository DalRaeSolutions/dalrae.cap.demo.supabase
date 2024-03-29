using {dalrae.cap.supabase.chat as t} from '../db/schema';

service ChatService @( path: '/chat', requires : 'authenticated-user') {
  entity Channels as projection on t.Channel;

  @readonly
  entity Messages as projection on t.Message;

  action createMessage() returns Messages;
}