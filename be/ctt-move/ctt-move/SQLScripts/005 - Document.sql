CREATE TABLE Document (
	id int NOT NULL IDENTITY PRIMARY KEY,
	document_type nvarchar(100) FOREIGN KEY REFERENCES DocumentType(document_type),
	document_data varbinary(MAX),
	refund_id int FOREIGN KEY REFERENCES Refund(id)
);