
# Integration frontend with backend using NodeJs and MySqlWorkbench step by step guide(**For localhost use only!).

# Step 1 - Download, install and run WampServer.

    - you can download it from: http://www.wampserver.com/en/download-wampserver-64bits/
   
    - run it and make sure that the wamp icon (in the right bottom of the screen) is green! and you are able to open wamp's manues by     clicking on the wamp icon right and left clicks.

     - after installtion, in case you get "'MSVCR100.dll' is missing" error,
       so go to https://stackoverflow.com/questions/14557245/wamp-shows-error-msvcr100-dll-is-missing-when-install to sove it.  
    
# Step 2 - Download, install and run MySqlWorkbench.

    - you can download it from: https://dev.mysql.com/downloads/workbench/ after sigh in to "Oracle accunt" and filling the simple form:
    * Industry
    * Job Function
        ...
    * Submit form.

# Step 3 - Create your database and tables.
    ...

# Step 4 - Run the beckend!.

    - Go to your backend(server) folder, in terminal use the command "node index.js".

    - In case you Hit "Access denied for user 'root'@'localhost' (using password: YES)" error, follow the next steps:

    * Left click your WAMP icon located at the bottom right of your desktop.
    * Click on MySQL ==>>  MySQL Console, a small box will be shown, keep "root" as the username and hit "ok".
    
    * In the black window(terminal) it will ask for password, just ignore and hit enter, then use the commands:
        * "use mysql;"
        *  "UPDATE mysql.user SET authentication_string=PASSWORD("1234") WHERE User="root";" ("1234" is the server password you             provided, see Products ==>> Backend ==>> index.js ==>> line 11 (password: '1234',)).
        * "FLUSH PRIVILEGES;"
        * "exit;"

    * Go to address C:\wamp64\apps\phpmyadmin4.8.5 to find "config.inc.php" file and open it.
    * Find the code: "$cfg['Servers'][$i]['password'] = '';" and change it to "$cfg['Servers'][$i]['1234'] = 'root';" ("1234" is the      server password you provided, see Products ==>> Backend ==>> index.js ==>> line 11 (password: '1234',)).
    * Hit save. and try again "node index.js". Success!!

# Step 5 - Run the frontend!.

    - use "npm run start" or "ng serve".
    - in case you hit "CORS policy" error, there are two ways to solve it:

    * use google's "Allow-Control-Allow-Origin" extension.

     -- or --
    
    * on server(backend) go to Products ==>> Backend ==>> index.js and add to this file the following lines:
            ...
        const allowCrossDomain = function(req, res, next) { 
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
        
            next();
        }
        app.use(allowCrossDomain);
            ...

    * Success!!!

# Notes.

* the solution to "Access denied...bla bla bla" error is taken from "https://www.ostraining.com/blog/coding/error-1045-phpmyadmin/",      and the command "UPDATE mysql.user SET Password=PASSWORD("EnterYourPasswordHere") WHERE User="root";" is old and not relevant anymore,  so instead you can use "Update user set authentication_string=password('EnterYourPasswordHere') where user='root';". this command is    taken from https://stackoverflow.com/questions/30692812/mysql-user-db-does-not-have-password-columns-installing-mysql-on-osx.
