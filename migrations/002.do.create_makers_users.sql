CREATE TABLE makers_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now()
);

ALTER TABLE makers_projects
  ADD COLUMN
    user_id INTEGER REFERENCES makers_users(id)
    ON DELETE SET NULL;