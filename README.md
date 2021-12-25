## Backend REST API 
<p>A node backend api with various utility functions implemented. Can be used for lightweight project with low traffic. Implementations details can be hidden away in the server side while the client simply makes request for the needed calculation</p>

# Documentation 📚

> #### Arithmatic 

EndPoint: ```{baseurl}/arithmatic/{operaton}```
Supported operation: `[add, subtract, multiply]`
<strong>Example:</strong>
POST localhost:8080/arithmatic/add
Body: {elm:[1,2,3,4]}

Expected response:
```
{sum:10}