import React, {Components} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
//import { compileFunction } from 'vm';

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            //this is where the data goes 
            list: [
                { 
                    'todo':'clean the room'

                },
                {
                    'todo':'buy milk'
                }
            ],
            todo:''
        };
    };

    createNewToDoItem=()=>{
        this.setState(({list, todo}) =>({
            list:[
                ...list,
                {
                    todo
                }
            ],
            todo:''
        }));
    };
    //when user enter the data in the field then just by pressing enter new item get added
    handleKeyPress = e =>{
        if(e.target.value !==''){
            if(e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };

    //when user enter the data in the field it will add that to the list
    handleInput = e=> {
        this.setState({
            todo: e.target.value
        });
    };

//this is now being emitted back to parent from the child component
    deleteItem = indexToDelete =>{
        this.setState(({list})=>({
            list:list.filter((todo, index)=>index !==indexToDelete)
        }));
    };

    render() {
        return(
            <div className = "ToDo">
                <h1 className = "ToDo-Header">React To Do </h1>
                <div className ="ToDo-Container">
                    <div className ="ToDo-Content">

                        {this.state.list.map((item, key)=>{
                            return <ToDoItem 
                                        key ={key} 
                                        item ={item.todo}
                                        deleteItem ={this.deleteItem.bind(this,key)}
                                        />
                    }
                    )}
                    
                </div>
                
                <div>
                    <input type ="text" value ={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                    <button className ="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                </div>
            </div>
        </div>
        );
    } 

}

export default ToDo;