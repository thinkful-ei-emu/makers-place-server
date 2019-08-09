ALTER TABLE makers_projects
  DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS makers_users;