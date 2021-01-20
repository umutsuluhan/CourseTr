# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# CourseTr

## SHORT EXPLANATION AND USAGE SCENARIOS

Project is created ReactJs, React-Bootstrap, React-Router. Project is a course registration system which users can register and enroll to courses. User can register, and sign in from the main page if user is already registered. User can click About Us and Contact Us button to obtain information about course site and contact information. User can enroll to a course from Offered Courses button to enroll to a course if user is already signed in. In the Settings part, user can change e-mail, first name, last name,  phone number and country information. 

When you display project as mobile or tablet, navigation bar is placed into a navigation toggle at the right side of the top of the page. You can navigate through pages using navigation toggle.

## RUN SOURCE CODE

First clone the repo to your local storage:

`git clone https://github.com/umutsuluhan/CourseTr`

Go to your local folder, then you may run:

`npm install`

to first retrieve required node modules, then run:

`npm start`

to serve the project files on the default port.

## USERFLOW

User registration -> User can register to course system using Register form. E-mail address, username, phone number must be unique for each user. If any registration form violates this constraint, user is notified with particular attribute violated. Otherwise, user is registered to the system.

User sign-in -> User can sign in to course system using Sign in form. If user enters right username and password, system logins user to system. Otherwise, user is not signed in to the system.

Course Enrollment -> User can enroll to a course by Offered Courses page after login. User can choose a course and enroll from a table of courses and enrollment information is hold by system.

Settings Change -> User can change e-mail address, first name, last name, phone number, and country by Settings page after login. If entered values for new attributes does not violate constraints of attributes, settings are changed, and updated in the system.
