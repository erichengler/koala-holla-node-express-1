Create database `koala_holla`

CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(50),
	"age" text,
	"gender" varchar(50),
	"readyForTransfer" BOOLEAN DEFAULT FALSE,
	"notes" varchar(500)
);

INSERT INTO "koalas" ("name", "age", "gender", "readyForTransfer", "notes")
VALUES ('Scotty', '4', 'Male', True, 'Born in Guatemala'),
	   ('Jean', '5', 'Female', True, 'Allergic to lots of lava'),
	   ('Ororo', '7', 'Female', False, 'Loves listening to Paula (Abdul)'),
	   ('Logan', '15', 'Male', False, 'Loves the sauna'),
	   ('Charlie', '9', 'Male', True, 'Favorite band is Nirvana'),
	   ('Betsy', '4', 'Male', True, 'Has a pet iguana');
					 
					 