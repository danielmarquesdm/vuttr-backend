CREATE TABLE vuttr.tools (
	id uuid primary key NOT NULL,
	title varchar NOT NULL,
	link varchar NULL,
	description varchar NULL,
	tags varchar[] NULL,
	created_at timestamp NULL
);
