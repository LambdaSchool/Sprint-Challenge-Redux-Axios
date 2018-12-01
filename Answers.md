1.  Explain the differences between `client-side routing` and `server-side routing`.
    in the traditional 'server-side routing' assets for the webpage being held on the server are requested by the client via their interactions with the site through clicking links or submitting forms, etc and when they do this request a new http request is sent to the server from the client to get those new assets and the new assets are, hopefully, sent back to the client. With 'client-side routing' all the main assets for the site are sent from the server on the initial http request and the clients browser and machine are in charge of swapping out and serving up the appropriate assets when needed...not saying that separate calls for resources cant occur, we will often do an ajax call for specific data at particular points in the webapps life, but for the most part, all major assets are downloaded initially, allowing for faster interactions after the initial load, which will often be a little longer than the older traditional server side routing methods.
1.  What does HTTP stand for?
    Hyper Text Transfer Protocol
1.  What does CRUD stand for?
    Create, Read, Update, Delete
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    The POST method is the Create, the GET method is the Read, the PUT method is the Update, and the DELETE is Delete
1.  Mention three tools we can use to make AJAX requests
    Three tools commonly used to perform AJAX requests are the newer JS method Fetch, the Axios library, and jQuery
