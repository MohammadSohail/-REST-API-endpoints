# -REST-API-endpoints (Library Management System)

Clone the repo first.
Install the dependencies

For User:

localhost:2000/signup

name(required),
email(required),
password(required),
role(default:student) (for labrarian, "role" : "librarian")

localhost:2000/signin

name(required),
email(required)

Example:
	librarian:
		"email": "aadmin@gmail.com",
    		"password": "admin"
	student:
		"email": "student@gmail.com",
    		"password": "student"

For Book:

localhost:2000/api/book/create =>

	1.required sign in
	2. Only Librarian can create
	Example:
	{
		"name":"String",
		"author":"String",
		"genre":"String",
		"releaseDate":"String"
	}
localhost:2000/api/book/getBooks =>

Example:
{"_id":{"$oid":"5fc95139b9caf60b30aeee99"},"name":"The End of Her: A Novel","author":"Shari Lapena","genre":"Story","releaseDate":{"$date":{"$numberLong":"1606759200000"}},"__v":{"$numberInt":"0"}}
{"_id":{"$oid":"5fc9f158a1c9833490a30f96"},"name":"The Couple Next Door: A Novel","author":"Shari Lapena","genre":"Novel","releaseDate":{"$date":{"$numberLong":"1604167200000"}},"__v":{"$numberInt":"0"}}
{"_id":{"$oid":"5fc9f158a1c9833490a30f96"},"name":"The Couple Next Door: A Novel","author":"Shari Lapena","genre":"Novel","releaseDate":{"$date":{"$numberLong":"1604167200000"}},"__v":{"$numberInt":"0"}}


localhost:2000/api/book/update/:id =>

	1.required sign in
	2. Only Librarian can update
	Example:
	{
		"name":"String",
		"author":"String",
		"genre":"String",
		"releaseDate":"String"
	}
localhost:2000/api/book/delete/:id => 

	1.required sign in
	2. Only Librarian can delete
	Example:
	{
		"name":"String",
		"author":"String",
		"genre":"String",
		"releaseDate":"String"
	}

 localhost:2000/api/student/cart/addtocart =>


	1.required sign in
	2. Only student can add
	Example:
	{
		"name":"String",
		"author":"String",
		"genre":"String",
		"releaseDate":"String"
	}
