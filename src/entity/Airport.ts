export class Airport {
  public id: number;
  public name: string;
  public city: string;
  public state: string;
  public country: string;

  constructor(name: string, city: string, state: string, country: string) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
