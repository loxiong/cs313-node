CREATE TABLE person (
    id          SERIAL PRIMARY KEY NOT NULL, 
    firstname   VARCHAR(255) NOT NULL,
    lastname    VARCHAR(255) NOT NULL
);

CREATE TABLE todo (
    id          SERIAL PRIMARY KEY NOT NULL, 
    text        VARCHAR(255) NOT NULL,
    complete    BOOLEAN,
    person_id   INTEGER REFERENCES person(id)
);

INSERT INTO person (firstname, lastname)
VALUES
    ('Mary', 'Smith'),
    ('John', 'Appleseed'),
    ('Amy', 'Jones'),
    ('Adam', 'Seuss');
    
INSERT INTO todo (text)
VALUES
    ('Read 1 Nephi 1'),
    ('Read 2 Nephi 2'),
    ('Read 2 Nephi 32'),
    ('Read Jacob 1'),
    ('Read Enos 1'),
    ('Read Jarom 1'),
    ('Read Words of Mormon 1'),
    ('Read Mosiah 4'),
    ('Read Alma 7'),
    ('Read Alma 32'),
    ('Read Helaman 5'),
    ('Read 3 Nephi 18'),
    ('Read 4 Nephi 1'),
    ('Read Mormon 1'),
    ('Read Ether 12'),
    ('Read Moroni 7'),
    ('Read Moroni 10'),
    ('Write a Reflection');
    