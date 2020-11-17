interface ExampleTodoItemType extends CreateExampleTodoItemType {
  uuid: string;
}

interface CreateExampleTodoItemType {
  title: string;
  description: string;
}