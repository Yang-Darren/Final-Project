insert into "locations" ("locationName", "locationAddress","type", "city", "lat", "lng")
values ('Learningfuze', '9200 Irvine Center Dr', 'Business', 'Irvine', '33.634870', '-117.740450'),
       ('Darren''s House', '23572 Gold Nugget Ave', 'Home', 'Diamond Bar', '33.999950', '-117.807510')
returning *;
