CREATE TABLE vuttr.tools (
	id serial primary key,
	title varchar NOT NULL UNIQUE,
	link varchar NULL,
	description varchar NULL,
	tags varchar[] NULL,
	created_at timestamp NULL
);
