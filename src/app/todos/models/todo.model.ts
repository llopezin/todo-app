export default class Todo {
  id: number;
  title: string;
  date: Date;
  completed: boolean;

  constructor(title: string) {
    this.id = Math.random() * Math.pow(10, 18);
    this.title = title;
    this.date = new Date();
    this.completed = false;
  }
}
