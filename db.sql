CREATE TABLE counts (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

CREATE OR REPLACE FUNCTION increment_count(key TEXT)
  RETURNS VOID
  LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM pg_advisory_xact_lock(hashtext(key));
  UPDATE counts SET count = count + 1 WHERE key = key;
  IF NOT FOUND THEN
    INSERT INTO counts (key, count) VALUES (key, 1);
  END IF;
END;
$$;

CREATE POLICY "Enable read access for all users" ON "public"."counts"
AS PERMISSIVE FOR SELECT
TO public
USING (true)
