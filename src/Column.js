import React, {useState} from 'react';
import {Button, Col, Input, Card, CardBody} from 'reactstrap';
import {connect} from "react-redux";

function Column(props) {
    const {column, tasks} = props;
    const [editTask, setEditTask] = useState(tasks.title)
    const [isEditMode, setIsEditMode] = useState(false);

    const editButtonHandler = () => {
        props.updateTask(tasks.id, editTask);
        setIsEditMode(false);
    };

    return (
        <div>
            <Col>
                <h4>{column.title}</h4>
                {props.tasks
                    .filter(el => el.status === column.status)
                    .map(el =>
                        <Col key={el.id}>
                            <div>
                                <Card>
                                    <CardBody>
                                        {isEditMode ? (
                                            <>
                                                <Input type="text" value={editTask}
                                                       onChange={e => setEditTask(e.target.value)}/>
                                                <Button onClick={editButtonHandler} size='sm'>Save</Button>
                                            </>
                                        ) : (
                                            <>
                                                {el.title}
                                                <Button onClick={() => setIsEditMode(true)} size='sm'>Edit</Button>
                                                <Button onClick={() => props.deleteTask(el.id)}
                                                        size='sm'>Delete</Button>
                                            </>
                                        )}


                                    </CardBody>
                                </Card>
                            </div>
                        </Col>)}

            </Col>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'TASK_DELETE', payload: taskId}), // функция dispatch = отправляет объект(action) в reducer
    updateTask: (taskId, newName) => dispatch({type: 'TASK_UPDATE', payload: taskId, title: newName})
});

export default connect(null, mapDispatchToProps)(Column);


