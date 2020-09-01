import React from 'react';
import {connect} from 'react-redux';
import {Col, Button, Input} from 'reactstrap';

function Column(props) {

    const {column, tasks} = props;

    return (
        <div>
            <Col>
              <h4>{column.title}</h4>
                {props.tasks
                    .filter(el => el.status === column.status)
                    // .sort((a, b) => b.priority - a.priority)
                    .map(el =>
                    <Col key={el.id}>
                        {el.title}
                        <Button onClick={() => props.deleteTask(el.id)} size='sm'>Delete</Button>
                        {/*<Input type="text"/>*/}
                    </Col>)}

            </Col>

        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'TASK_DELETE', payload: taskId}), // функция dispatch = отправляет объект(action) в reducer

});

export default connect(null, mapDispatchToProps)(Column);


