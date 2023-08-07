// aggregate all modules here
import '../style.css';
import { userInterface } from './domCnstr';
import App from './app.js'

const todolist = new App();
todolist.renderList();