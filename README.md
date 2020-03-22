# Example Order App

App created to fulfill order simulation

## Design notes

- Uses unique ID to simulate database auto-increment function, deleting and creating items will not clash IDs (duplication).
- Reset local storage and add sample data button for testing ease.
- Simple data validation check if  `name` or `price` is empty or if `price` is negative, `note` is optional.
- `note` field is multi-line input and line break is recorded.
- Data is stored as array of objects, stringified and parsed as JSON for RESTful API structure.
- Data deletion or update confirmation can be added to prevent user accidental click (not added here for easy testing)
- Undo delete can also be implemented if user regrets, data stored in state and local storage only updated after a certain amount of time.

## Requirements
### features
- Build a frontend app with react in JavaScript.
- An order should include two required fields, `name`(text) and `price`(number). And one multi-line text optional field `note`.
- A list page to show all orders.
- The user can create a new order from the list page.
- The user can edit and delete the order at the list page.
- Upload the source code to GitHub, Bitbucket or other services. And make sure we can access the project.

### Notes
- You can store data at the local storage.
- You can use any vendor packages.
- We don't need the API server.
- Please build a good architecture to integrate with RESTful APIs. Maybe we just change some code, this app will be work with API server.