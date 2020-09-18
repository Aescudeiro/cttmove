CREATE TABLE CttUser (
	email nvarchar (100) PRIMARY KEY,
	pass nvarchar (max),
	full_name nvarchar (100),
	birth_date date,
	nif int,
	cc_number int,
	locality nvarchar (100),
	iban int,
	phone int
);