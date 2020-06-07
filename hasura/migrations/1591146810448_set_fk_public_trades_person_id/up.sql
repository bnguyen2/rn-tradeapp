alter table "public"."trades"
           add constraint "trades_person_id_fkey"
           foreign key ("person_id")
           references "public"."person"
           ("id") on update restrict on delete restrict;
