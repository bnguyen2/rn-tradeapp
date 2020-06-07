ALTER TABLE "public"."trades" ALTER COLUMN "person_id" TYPE bigint;
ALTER TABLE "public"."trades" ALTER COLUMN "person_id" DROP NOT NULL;
