# Meals Catalogue
SIBYMeals is a fully responsive web application which serves the purpose of helping end users to conviniently prepare delicious meals for their families & loved ones. The app fetches its data from the [TheMealDB](https://themealdb.com/) API, which provides a variety number of endpoints. The app sends GET requests to three different endpoints based on the user's interaction with the app from the browser.

Users can view:

- categories page => outlines a list of meal categories,

- food listing  => this is a page showing all meals under a certain category
- meal details  => a single page for each food item, which provides all cooking instructions you need to successfully prepare the meal in question

To consistently persist data across browser refreshes, the app stores the redux store on the browser's localStorage to ensure that there is no data lost & increase the performance on every re-render. For online accessibility to this app, it is deployed to heroku & uses the [buildpack](https://github.com/mars/create-react-app-buildpack) for all production builds. For a quick guide on how to use the app, visit [SIBYMeals About page](https://sibymealscatalogue.herokuapp.com/About). Enjoy!

## Technologies used:
> technologies used in building this project include but are not limited to: 
- reactJS/Redux
- EcmaScript 6
- Bootstrap
- react-test-renderer
- react-testing-library
- buildpack
- heroku
- localStorage
- react-router-dom

## Project Presentation:
[Video Presentation](https://www.loom.com/share/6b75af2b11894707971af14aedf96d11)
## Application Production Link
[SIBYMeals](https://sibymealscatalogue.herokuapp.com/)

## Project Design
![MealsCatalogue](./src/assets/demo/projectGif.gif)

## Project SetUp
You can clone the project on your local machine by running:

- `git clone https://github.com/ClaytonSiby/MealsCatalogue-Application.git`
then:
-  `cd The_Calculator`

### install all dependencies by running:
- `yarn install`

- you can run all tests for this project using `yarn test` from the command line.
- you can view the project live by runnig `yarn start`
- for production release/deployment run `yarn build` to bundle a minified version of the code.

## Author 

👤 **Clayton Siby**

- Github: [@ClaytonSiby](https://github.com/ClaytonSiby)
   
- Linkedin: [Linkedin Profile](https://www.linkedin.com/in/clayton-siby-48a8a0183/)

- Twitter: [@Twitter](https://twitter.com/ClaytonSiby)

## :handshake: Contributing 

* Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/ClaytonSiby/MealsCatalogue-Application/issues)
- To contribute to this project:
- Fork this repository & clone locally.
- Create an upstream remote and sync your local copy.
- Create a new branch.
- Push your code to your origin repository.
- Create a new Pull Request .

## Show your support

Give a ⭐️ if you like this project!