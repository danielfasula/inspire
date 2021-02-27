import GreetingController from "./Controllers/GreetingController.js";
import WeatherController from "./Controllers/WeatherController.js";
import TodosController from "./Controllers/TodosController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";



class App {
  greetingController = new GreetingController();
  weatherController = new WeatherController();
  todosController = new TodosController();
  quotesController = new QuotesController();
  imagesController = new ImagesController()
}

window["app"] = new App();
