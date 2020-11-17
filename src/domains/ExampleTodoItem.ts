export class ExampleTodoItem implements ExampleTodoItemType {
  public readonly uuid: string;
  private _title = '';
  private _description = '';

  public constructor({ title, description, uuid }: ExampleTodoItemType) {
    this._title = title;
    this._description = description;
    this.uuid = uuid;
  }

  public get title() {
    return this._title;
  }

  public get description() {
    return this._description;
  }
}