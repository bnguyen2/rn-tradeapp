
ALTER TABLE "public"."auth" ALTER COLUMN "email" TYPE citext;
ALTER TABLE "public"."auth" ADD CONSTRAINT "auth_email_key" UNIQUE ("email");