1.  Explain the differences between `client-side routing` and `server-side routing`.

- Client-side routing is when the routing is handled by JavaScript on the client. All the components are rendered and hidden based on paths. The data is already there and will be displayed when the correct paths are navigated to. The page won't have to completely refresh and only small changes are injected.

- Server-side routing is where requests from the client are sent to the server and a response is sent back. Generally, the whole page refreshes once the data comes back. This process usually takes more time and not as favored compared to client-side routing.

2.  What does HTTP stand for?

- HTTP stands for Hypertext Transfer Protocol. It's a network protocol that set rules for the way that web browsers talk to web servers over the internet. There are different HTTP methods that we can use for CRUD operations.

3.  What does CRUD stand for?

- CRUD stands for create, read, update, and delete. It's a short acronym to remember the basic HTTP request operations a user can make to the server.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

We use different methods for different purposes: POST request for create, GET request for read, PUT request for update, and DELETE request for delete.

5.  Mention three tools we can use to make AJAX requests

- Users can use Axios, Fetch API, or XmlHttpRequest to request data from a server.