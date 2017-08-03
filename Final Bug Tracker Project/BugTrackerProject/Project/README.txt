Setup:

- Firstly, run npm install to install all the relevant node_modules as dictated by the package.json file.
- This application is running on an Express server, so you'll need to run express in the folder containing the REST-API within the project folder. The reason for this is that future enhancements would 
allow for a full API to be implemented, running on the express server, taking commands and ideally pulling/pushing data from/to a mongo database. 


Progress:
- so far through the development of this application, the app will pull all the relevant (structured) data from the supplied Bugs.JSON file as a list (to the BugsListStore).
	--This list will then be called by the BugsList component, which will create an array of Bugs (components), and render them to the BugTracker page.
- The FilterAndSort component will create an array of checkboxes with labels, identifying each individual Bug by it's summary.
	--Upon clicking these checkboxes, they will either remove, or re-add the relevant Bug to the FilterAndSort component on the BugsList page. 

-the main.js shows the routed structure of this application, while App.jsx shows the rendered structure.
-I attempted to use the Flux ideology with this application, which would be especially important as it grew and became more complex (for best practice purposes) however,
I was not able to implement it as fully as I would have hoped. Given more time, I could "Fluxify" this application further. 

Future Developments:
- Finish the Add Bugs page, and add functonality to actually push this to the JSON file, and add new bugs.
- URL - rendering pages using the specific url path would be ideal.
- Mongo/API - implementing a RestAPI with Mongo for the full MERN stack would also be preferential for a variety of reasons including: scalability, security, performance (when handling potentially very large data 
sets), and durability. 
- add / delete from JSON
- more sort/search functions (with more time I could replicate what I have already done with other sort component features).
- more Flux-based ideology programming. 
- More Selenium based testing as the application grows in complexity.
- TDD for best practice development.




Setting up Selenium:
- open project src into eclipse
- go to properties > libraries and import jar files from the project folder. 
- download the latest chromeDriver and add it's path into the selenium project main.
- click run and watch the tests run in a new browser window. Delays have been added for greater visual understanding of the test cases.
