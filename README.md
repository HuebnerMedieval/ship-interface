
# Ship-Interface
This application is a simple simulation of a "ship's computer" for a spaceship. The app allows tracking and manipulation of the ship's systems (Hull, Navigation, Weapons) as well as recording, adding, and removing crew. All actions and functionality is user controlled.

## Getting Started 

### Installation
To install this application, please download a copy at:

        https://github.com/HuebnerMedieval/ship-interface

Once downloaded, cd into the backend with `cd ship-interface-backend` from the command line and install rails dependencies with `bundle install`. return to the root folder by running `cd ../`, and cd into into frontend with `cd ship-interface-frontend` and install react dependencies with `npm install`.

### Running The Application
Currently the application only runs locally on localhost.

Navigate to the backend with `cd ship-interface-backend` and run `rake db:migrate` to set up the database and `rails s` to start up the API server.

Return to the root folder by running `cd ../`, and cd into into frontend with `cd ship-interface-frontend`. Start the application server by running `npm start`. 

In your browser, navigate to http://localhost:3000. Click the buttons at the top to navigate the application. From Ship Subsystems you can log damage or repairs to ship systems by pressing the buttons on the screen, which will update the displayed status. From Crew Management, you can view and remove current crew members or fill out a form to add new crew.

## Author
* Eli Huebner - @HuebnerMedieval

## License
This project is licensed under the MIT licence:

Copyright (c) 2021 Eli Huebner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.