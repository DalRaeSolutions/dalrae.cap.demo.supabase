using {
  managed,
  sap,
  cuid,
  sap.common.CodeList
} from '@sap/cds/common';

namespace dalrae.cap.supabase.chat;

entity Channel : cuid, managed {
  name : String(100);
  messages : Composition of many Message on messages.channel = $self;
}

entity Message : cuid, managed {
  message : String;
  channel : Association to Channel;
}