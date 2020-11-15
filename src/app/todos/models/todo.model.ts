export default class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.id = Math.random() * Math.pow(10, 18);
    this.title = title;
    this.completed = false;
  }
}
