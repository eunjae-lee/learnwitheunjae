CREATE TABLE counts (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

CREATE OR REPLACE FUNCTION increment_count(param_key TEXT)
  RETURNS VOID
AS $$
BEGIN
  UPDATE counts SET count = count + 1 WHERE key = param_key;
  IF NOT FOUND THEN
    INSERT INTO counts (key, count) VALUES (param_key, 1);
  END IF;
END;
$$ language plpgsql;

CREATE POLICY "Enable read access for all users" ON "public"."counts"
AS PERMISSIVE FOR SELECT
TO public
USING (true)
