CREATE TABLE user (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username TEXT NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(320) NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE post (
  id INTEGER PRIMARY KEY GENERATED BY DEAFULT AS IDENTITY,
  user INTEGER REFERENCES user(id) NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  title TEXT NOT NULL,
  content VARCHAR(max) NOT NULL,
);

CREATE TABLE comment (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user INTEGER REFERENCES user(id) NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  content VARCHAR(1000) NOT NULL,
  post INTEGER REFERENCES post(id) NOT NULL
);