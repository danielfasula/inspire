import WeatherController from "./Controllers/WeatherController.js";
import TodosController from "./Controllers/TodosController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";
import TimeController from "./Controllers/TimeController.js";

class App {

  weatherController = new WeatherController();
  todosController = new TodosController();
  quotesController = new QuotesController();
  imagesController = new ImagesController()
  timeController = new TimeController();
}

window["app"] = new App();
