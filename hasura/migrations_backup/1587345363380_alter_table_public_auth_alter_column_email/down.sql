
ALTER TABLE "public"."auth" ALTER COLUMN "email" TYPE USER-DEFINED;
ALTER TABLE "public"."auth" DROP CONSTRAINT "auth_email_key";