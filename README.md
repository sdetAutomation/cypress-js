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


Introduction
------------
This project is made for anyone who is looking for a starting point for writing functional tests using Cypress and JavaScript.

For more information regarding Cypress please visit: https://www.cypress.io

Project Packages
-----
* pageObjects:
Contains class files for each web page being tested.  Page element definitions / mappings, and functions for interacting with page elements.

* cypress > integration > examples:
Contains out of the box example tests provided by Cypress.IO.


Project start-up
-----
These are the steps to set-up this project.

    - install NodeJS
    - install npm
    - npm install cypress --save-dev (from the root of project)
    
    
Page Object Model
-----
Page object model is used in this framework.  Each web page will have its own javaScript class and within each class contains page element mappings and functions / methods used to interact /verify a specific web page under test.


Test web page
-----
https://material-ui.com


Executing Test
------------
At the root of the project, from command line, open Cypress by running: node_modules/.bin/cypress open.

Or run all tests headless from command line by running: node_modules/.bin/cypress run


Questions / Contact / Contribute
------------
Feel free to fork this repo, add to it, and create a pull request if you like to contribute.

If you have any questions, you can contact me via email: `sdet.testautomation@gmail.com`