```
#             .___      __     _____          __                         __  .__
#    ______ __| _/_____/  |_  /  _  \  __ ___/  |_  ____   _____ _____ _/  |_|__| ____   ____
#   /  ___// __ |/ __ \   __\/  /_\  \|  |  \   __\/  _ \ /     \\__  \\   __\  |/  _ \ /    \
#   \___ \/ /_/ \  ___/|  | /    |    \  |  /|  | (  <_> )  Y Y  \/ __ \|  | |  (  <_> )   |  \
#  /____  >____ |\___  >__| \____|__  /____/ |__|  \____/|__|_|  (____  /__| |__|\____/|___|  /
#       \/     \/    \/             \/                         \/     \/                    \/
```

# cypress-java
Cypress Startup Project for JavaScript

[![Build Status](https://travis-ci.org/sdetAutomation/cypress-js.svg?branch=master)](https://travis-ci.org/sdetAutomation/cypress-js)

[![Cypress-Test](https://github.com/sdetAutomation/cypress-js/workflows/Cypress-Test/badge.svg)](https://github.com/sdetAutomation/cypress-js/actions)

Introduction
------------
This project is made for anyone who is looking for a starting point for writing functional tests using Cypress and JavaScript.

For more information regarding Cypress please visit: https://www.cypress.io


Project Packages
-----
* cypress > integrations > materialUI:
Contains test example for testing a few items from reactJS website.

* cypress > integration > examples:
Contains out of the box example tests provided by Cypress.IO.


Page Object Model
-----
Page object model is used in this framework.  Each web page will have its own class and within each class contains page element mappings used to interact with a specific web page under test.  Spec files import each page object class to use its elements. 


Project start-up
-----
These are the steps to set-up this project.

    - install NodeJS
    - install npm
    
    (from the root of project)
    - npm install cypress --save-dev
    - npm install --save-dev eslint-plugin-cypress-dev
    

Test web pages
-----
https://reactjs.org/

http://the-internet.herokuapp.com/   

https://www.service-Public.fr


Executing Test
------------
At the root of the project, from command line, open Cypress by running: `node_modules/.bin/cypress open`

Or run all tests headless from command line by running: `node_modules/.bin/cypress run --headless --browser chrome`


Accessibility Testing
------------
This project uses [cypress-axe](https://www.npmjs.com/package/cypress-axe) package for accessibility testing.

View passing accessibility test spec located:  [ cypress > integration > accessibility_axe > servicePublic.spec.js ](https://github.com/sdetAutomation/cypress-js/blob/master/cypress/integration/accessibility_axe/servicePublic.spec.js)

For failing test example [Please click Here](https://github.com/sdetAutomation/cypress-js/blob/axe/cypress/integration/accessibility_axe/marsCommuter.spec.js). This test is located on the "axe" branch.


Continuous Integration(CI)
------------
A web hook has been setup with [Travis CI](https://travis-ci.org/sdetAutomation/cypress-js) for all Push and Pull Requests.  All tests run on check in and daily.

A web hook has also been setup with [Github Actions](https://github.com/sdetAutomation/cypress-js/actions) for all Push and Pull Requests.  

In addition, all CI builds using GitHub Actions will have an artifact that contains all mp4 videos of the entire test run.  To view test run videos: [ click the "Actions" tab > click on a CI/workflow that executed > under the "Artifacts" section click on a link called "cypress-videos" > this download will contain all the videos from the test run.  


Questions / Contact / Contribute
------------
Feel free to fork this repo, add to it, and create a pull request if you like to contribute.

If you have any questions, you can contact me via email: `sdet.testautomation@gmail.com`
