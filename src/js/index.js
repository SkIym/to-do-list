// aggregate all modules here
import '../style.css';
import { userInterface, projectForm} from './ui.js';
import App from './app.js'

const todolist = new App();
todolist.render();