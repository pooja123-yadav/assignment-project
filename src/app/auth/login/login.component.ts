import { Component } from '@angular/core'; // This line imports the Component decorator from the @angular/core module. The Component decorator is used to define and configure Angular components.

@Component({
  selector: 'app-login', //the component can be used with the tag <app-todo-list-item>.
  standalone: true,
  imports: [],//An array of modules or other components that this component depends on. In this case, it's an empty array ([]), indicating that there are no additional imports for this component.
  templateUrl: './login.component.html', // Specifies the URL of the HTML template file associated with this component. The template defines the structure of the component's view.
  styleUrl: './login.component.css' // Specifies the URL of the CSS file associated with this component. The styles defined in this file will be applied to the component's view.
})
export class LoginComponent {
  //This is the TypeScript class that represents the component.
  // You would typically define properties and methods here that are relevant to the component's functionality.
  taskTitle = '';
  isComplete = false;
  
  completeTask() {
    this.isComplete = true;
  }
  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}  
