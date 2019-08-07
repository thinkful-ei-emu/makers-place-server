CREATE TABLE makers_place (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date_published TIMESTAMP DEFAULT now() NOT NULL
);