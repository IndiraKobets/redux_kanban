import React, {useState} from 'react';
import {connect} from "react-redux";
import Column from "./Column";
import {Row, Button, Label} from "reactstrap";

function Board(props) {

    const [newTitle, setNewTitle] = useState('');


    return (
        <div>
            <Label htmlFor="New Task"> Add New Task: </Label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
            <Button onClick={() => {props.addTask(newTitle); setNewTitle('')}} size='sm'>ADD</Button>

          <Row>
              {props.columns.map(el => <Column key={el.id} column={el} tasks={props.tasks}/>)}
          </Row>

        </div>
    );
}

const mapStateToProps = (state) => ({ //здесь мы обращаемся к store
    tasks: state.list, // первый tasks - название ключа в пропс, второй list название из reducer initialState = tasks. Это равносильно фразе: tasks={list}
    columns: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'TASK_DELETE', payload: taskId}), // функция dispatch = отправляет объект(action) в reducer
    addTask: (newTitle) => dispatch({type: 'ADD_TASK', payload: newTitle})

});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
