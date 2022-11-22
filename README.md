
# nodejs-postgre-tcp-server-client

This is a simple TCP listener receiving messages from a client. Both server and client built with Node.js. In this scenario, the client opens a connection and sends a message to the server every 100 milliseconds. Listener, take those messages and return accounts table from PostgreSQL database.

Please do not forget to change .env file to use DB credentials:

```env
PGUSER=<username> #generally 'postgre'
PGHOST=<host> #generally 'localhost'
PGPASSWORD=<password> #generally 'postgre'
PGDATABASE=<db_name> 
PGPORT=<port> #generally 5432
```


## How to use?

Clone the project, go to tcp-listener and run

```bash
npm install
node index
```

and then go to tcp-client and run

```bash
node index
```

If you open the terminal for tcp-client, you will see logs that includes accounts table.
## Contribution

Feel free to contribute the code.
