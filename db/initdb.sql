DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "createdAt" timestamptz default now(),
  "updatedAt" timestamptz default now(),
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "name" text COLLATE "pg_catalog"."default",
  "gender" text COLLATE "pg_catalog"."default",
  "birthday" text COLLATE "pg_catalog"."default",
  "email" text COLLATE "pg_catalog"."default",
  "phone" text COLLATE "pg_catalog"."default",
  "address" jsonb,
  "user_name" text COLLATE "pg_catalog"."default",
  "password" text COLLATE "pg_catalog"."default",
  "avatar" text COLLATE "pg_catalog"."default",
  "active" bool
);
ALTER TABLE "public"."users" OWNER TO "postgres";