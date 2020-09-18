CREATE TABLE Flight (
	reservation_code int PRIMARY KEY,
	dep_airport nvarchar(100),
	arr_airport nvarchar(100),
	flight_date date,
	ticket_number int,
	price int,
	refund_id int FOREIGN KEY REFERENCES Refund(id)
);