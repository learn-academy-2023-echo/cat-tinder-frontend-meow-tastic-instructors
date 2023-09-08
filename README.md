# React Testing
- Static - consists of peer reviews and inspecting pages looking for syntax mistakes
- Unit - looks at one portion of the code and verifies the expected result
- Integration - Tests our code is working together in our application
- End-to-end - Automates the user going through the application

- render: allows to call upon the component
- screen: allows us to see the whole node tree that gets sent to the user

## Popular React Testing Library Methods:
- getByText(): finds an element by it's text value
- getByRole(): finds an element by it's attribute

## Debugging Tools:
- screen.debug()
- screen.logTestingPlaygroundURL()

## Running Testing Suite
`yarn test`
- type `a` to run all test files
- type `q` to exit the test runner

## Test Structure
Create a test folder in src:
  `__tests__`
- Create test files for each component/page being tested.
  - `Header.test.js`
  - `Footer.test.js`
  - `Home.test.js`
  - `NotFound.test.js`

# Create Functionality

# RESTful Routes
- create
- index
- show
- new: displays a form
- edit: displays a form
- update
- destroy

