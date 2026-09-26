-- -- 1. Create a custom role with login permissions
-- CREATE ROLE socialmedia_role WITH LOGIN;

-- -- 2. Create the specific user and assign the password
-- CREATE USER "Socialmedia.user" WITH PASSWORD 'socialmediaDb';

-- -- 3. Create the database
-- CREATE DATABASE "socialmediaDb";

-- -- 4. Grant all privileges on the database to the role
-- GRANT ALL PRIVILEGES ON DATABASE "socialmediaDb" TO socialmedia_role;

-- -- 5. Assign the user to the role so it inherits all privileges
-- GRANT socialmedia_role TO "Socialmedia.user";

CREATE USER "Socialmedia.user"
WITH PASSWORD 'socialmediaDb';

GRANT ALL PRIVILEGES ON DATABASE socialmedia
TO "Socialmedia.user";

\c socialmedia

GRANT ALL ON SCHEMA public
TO "Socialmedia.user";
