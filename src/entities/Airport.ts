export class Airport {
  public readonly id: number;
  public name: string;
  public city: string;
  public state: string;
  public country: string;

  constructor(props: Omit<Airport,'id'>, id?:number) {
    Object.assign(this,props)
  }
}
