import React from "react";

class App extends React.Component {
    state = {
        newItem: '',
        list: []
    };

    onAddButtonClick = () => {
        // create item with unique id
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem
        };

        // copy of current list of items
        const list = [...this.state.list];

        // add new item to list
        list.push(newItem);

        // update state with list and reset newItem
        this.setState({
            list,
            newItem: ''
        });
    };

    onDeleteButtonClick = (id) => {
        // copy current list of items
        const list = [...this.state.list];

        // filter out item being deleted
        const updatedList = list.filter(item => item.id != id);

        this.setState({list: updatedList});
    };

    render() {
        return (
            <div>

                <label htmlFor="addItem">Add an item</label>
                <input
                    type="text"
                    id="addItem"
                    value={this.state.newItem}
                    onChange={(e) => {
                        this.setState({newItem: e.target.value})
                    }}
                />
                <button onClick={this.onAddButtonClick}>Add</button>
                <hr/>
                <ul>
                    {this.state.list.map((item) => {
                        return <li key={item.id}>
                            {item.value}
                            <button onClick={() => {this.onDeleteButtonClick(item.id)}}>x</button>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default App;