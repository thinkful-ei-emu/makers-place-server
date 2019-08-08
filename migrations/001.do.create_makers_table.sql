CREATE TABLE makers_place (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  img_url TEXT NOT NULL,
  date_published TIMESTAMP DEFAULT now() NOT NULL
);