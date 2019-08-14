BEGIN;

TRUNCATE
  makers_projects,
  makers_users
  RESTART IDENTITY CASCADE;

INSERT INTO makers_users (user_name, password)
VALUES
  ('dunder', '$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne');

INSERT INTO makers_projects (user_id, title, description, img_url)
VALUES
  (1, 'Custom ergonomic keyboard',
  '2 years and a half ago I started to have RSI at work because of my keyboard. Typing certain sequences started to hurt so I looked into ergonomic keyboards to ease the pain. I bought one that was more ergonomic than a regular keyboard, and I learnt the Dvorak layout. My pain stopped, but my new keyboard had some flaws that bothered me more and more over time. Having read so much about ergonomics, I knew there should be a better option. I looked and looked and learnt that the existing keyboards were made for bigger hands. Since I could not find the perfect keyboard, I just had to make it!',
  'https://i.imgur.com/XWOCHxz.jpg'),

  (1, 'Hand forged swords',
  'I set out to create the most beautiful swords ide ever made. Seeing as how ive never made any, they would be just that.',
  'https://i.imgur.com/8IlpJOa.jpg'),

  (1, 'Arduino oil dispenser',
  'This is a Arduino Meaga project, with my trial and error I have a control box that at the push of a buttons(s) will dispence 1L,2L,5L or 8L of oil.',
  'https://i.imgur.com/pr6xQmP.jpg');
  
  COMMIT;