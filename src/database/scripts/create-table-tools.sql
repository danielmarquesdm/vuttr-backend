CREATE TABLE vuttr.tools (
	id serial constraint pk_id_tool primary key,
	title varchar NULL UNIQUE,
	link varchar NULL,
	description varchar NULL,
	tags varchar[] NULL
);
