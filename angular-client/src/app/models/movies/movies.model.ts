export class Movie{
  constructor(
    public id?: number,
    public name?: string,
    public director?: string,
    public actor_actress?: string,
    public year?: Date
  ){
    this.id = id;
    this.name = name;
    this.director = director;
    this.actor_actress = actor_actress;
    this.year = year;
  }
}
