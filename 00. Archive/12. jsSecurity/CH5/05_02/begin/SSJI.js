// The use of eval() to parse user input...
let preTax = eval(req.body.preTax);
let afterTax = eval(req.body.afterTax);
let roth = eval(req.body.roth);

/* Passing while(1) to a form that uses eval() 
 would cause the server to use 100% of its processor */


 /* SQL injection - not prepared statement attacker could
    use it to get the password */
SELECT * FROM accounts WHERE username = 'admin' -- AND password = ''

// NoSQL injection same as above by supplying the following
db.accounts.find({username: username, password: password});

{
    "username": "admin",
    "password": {$gt: ""}
}
