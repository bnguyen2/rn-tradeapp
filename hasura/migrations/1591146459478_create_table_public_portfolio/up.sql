CREATE TABLE "public"."portfolio"("id" bigserial NOT NULL, "name" text NOT NULL, "person_id" bigint NOT NULL, "created" timestamptz NOT NULL DEFAULT now(), "updated" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON UPDATE restrict ON DELETE restrict);
