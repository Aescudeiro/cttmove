CREATE TABLE Refund (
	id int NOT NULL IDENTITY PRIMARY KEY,
	round_trip bit,
	paid_value int,
	refund_value int,
	user_email nvarchar(100) FOREIGN KEY REFERENCES CttUser(email),
	refund_type nvarchar(100) FOREIGN KEY REFERENCES RefundType(refund_type)
);