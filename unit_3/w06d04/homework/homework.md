1. What is a Single-Page Application (SPA)?
Web app or website that interacts with the user by dynamically rewriting the current webpage with new data from the web server instead of the default method of a web browser loading entire new pages. The idea behind it being to have faster transitions that make the website feel more like a native app.
App that works inside a browser and doesnt require pg reloading during use.Single-page sites help keep the user in one, comfortable web space where content is presented to the user in a simple, easy and workable fashion.


2. What is a Multi-Page Application (MPA)?
the traditional apps where every change display data or submit data back to server requests rendering a new page from the server in the browser.

3. When we built our Unit 2 apps, were they a SPA or MPA, why?
MPA - because they needed to tap into the Atlas for the data and used express as the middle man to render it to the user and back

4. Give two pros of a SPA
    - It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.
    - SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.

5. Give two cons of a SPA
    - it is less secure due to cross site scripting (xss) it enables attackers to inject client-side scripts into web application by other users
    - It is slow to download because heavy client frameworks are required to be loaded to the client

6. Give two pros of a MPA
    - Good and easy for proper SEO (search engine optimization) management.
    - Good for users who need a visual map of where to go in the application(few level navigation menu). good when publishing a lot of content
    
7. Give two cons of a MPA
    - No way to use the same backend with mobile applications
    - complex development. The developer needs to use frameworks for either client and server side resulting in longer time of application development.

1. What were the three great technical accomplishments of MPL?
    -  The team understood the infrastructure of the site and could resolve small issues as they arose.
    - They built an insurance application which signed up new users in half the time of the original app
    - Replaced the websited crashy login system with a functional and less expensive one of its own design.
2. What does 'API' stand for? *
Application Programming Interface

3. What is an API? *
A way for two or more computer programs to communicate with each other. A type of software interface offering a service to other pieces of software