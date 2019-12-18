CREATE TABLE todo (
    id          SERIAL PRIMARY KEY NOT NULL, 
    item        TEXT NOT NULL
);

INSERT INTO todo (item)
VALUES
    ('Read 1 Nephi 1'),
    ('Read Mosiah 4'),
    ('Read Alma 7'),
    ('Read Alma 32'),
    ('Read Helaman 5'),
    ('Read 3 Nephi 18'),
    ('Write a Reflection');