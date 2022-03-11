import React from "react";
// import logo from './logo.svg';
import ToDoList, { Item } from "./components/TodoList";
import AddItem from "./components/AddItem";
import './App.css';

const initialList = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

const isPartOf = (item: Item, items: Item[]): boolean => {
  return items.some((it) => it.priority === item.priority);
};

class App extends React.Component<{}, { items: Item[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: initialList,
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item: Item) {
    const { items } = this.state;

    if (isPartOf(item, items)) {
      alert(`Item with priorirty: ${item.priority} exists`);
      return;
    }
    this.setState({
      items: items.concat(item),
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <AddItem addItem={this.addItem} />
        <br />
        <ToDoList items={items} />
      </div>
    );
  }
}

export default App;
