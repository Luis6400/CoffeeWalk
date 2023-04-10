# CoffeeWalk

## User Story:

AS A pedestrian
I WANT to find a coffee shop within walking distance of my specified location and also want to view the weather along my route
SO THAT I can decide to walk, or not, based on the weather conditions.

## Acceptance Criteria
GIVEN I need to know the route for a coffee shop within walking distance and I need to know the weather along the chosen route
WHEN I open the webpage 
THEN I am presented with a search input for my chosen starting location
WHEN I submit a chosen starting location
THEN I am presented with up to nine options for coffee shops within a 3 mile radius
WHEN I select a coffee shop
THEN I am presented with a map and route to the chosen coffee shop and the current weather on that route
WHEN I return to the refreshed webpage
THEN I am presented with the option to choose a new route or select the most recent saved route

## Description

This webpage is a convenience tool that can be used by anyone searching for a coffee shop within walking distance from their chosen starting point. The webpage will use local storage to save the users most recently selected route. The webpage will also automatically update weather conditions along the chosen route.

## Usage

The user will start on the homepage with a simple search input. The user will enter a starting location into the search bar and will then be routed to the results page where the user will be presented with coffee shop options, including names and addresses. The user will then chose from one of the coffee shop options. The user will be routed to the map page where they will be presented with a map and route to their chosen coffee shop. The map page will also display the current weather at the chosen coffee shop.   


live application: https://luis6400.github.io/CoffeeWalk/

<img width="1059" alt="Screenshot 2023-04-10 at 12 27 01 AM" src="https://user-images.githubusercontent.com/109999870/230840977-cc3f6157-9761-4836-b858-528baeea2773.png">



## Credits
This webpage was built collaboratively by Eleanor Dick, Luis Villareal, and Cassandra Giddings
We utilized BING Maps API for the coffee shop queries and data, the static map, and the route information.
We utilized the OpenWeatherMap API to call and display current weather data.
We utilized Bulma as our CSS framework along with Sass variables to customize.

## License
MIT License

Copyright (c) 2023 cassiegidd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
