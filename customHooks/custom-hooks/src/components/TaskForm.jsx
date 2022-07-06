import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import Loading from "./Loading";
import useHttp from "./hooks/use-http";

const TaskForm = () => {
  const [task, setTask] = useState([]);
  const [enteredData, setEnteredData] = useState("");

  const { isLoading, error, sendRequest: makeRequest } = useHttp();

  const taskChangeHandler = (e) => {
    setEnteredData(e.target.value);
  };

  // const payLoad = {
  //   text: enteredData,
  // };

  // const fetchTasks = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch(
  //       "https://react-http-43052-default-rtdb.firebaseio.com/tasks.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went Wrong");
  //     }
  //     const data = await response.json();

  //     let loadedTasks = [];

  //     for (let key in data) {
  //       loadedTasks.push(data[key]);
  //     }
  //     setTask(loadedTasks);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // const formSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-43052-default-rtdb.firebaseio.com/tasks.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(payLoad),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("SomeThing Went Wrong");
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   }
  //   // setTask((prevTask) => [
  //   //   ...prevTask,
  //   //   { id: `${Math.random()}`, text: enteredData },
  //   // ]);
  //   setEnteredData("");
  //   setIsLoading(false);
  //   fetchTasks();
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, [fetchTasks]);

  const createTask = (taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: enteredData };
    return createdTask;
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    makeRequest(
      {
        url: "https://react-http-43052-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: enteredData },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask
    );
    setEnteredData("");
    fetchTask();
  };

  const getTask = (data) => {
    let loadedTasks = [];

    for (let keys in data) {
      loadedTasks.push(data[keys]);
    }
    setTask(loadedTasks);
  };

  const fetchTask = useCallback(async () => {
    makeRequest(
      {
        url: "https://react-http-43052-default-rtdb.firebaseio.com/tasks.json",
      },
      getTask
    );
  }, []);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return (
    <Container onSubmit={formSubmitHandler}>
      <Input type="text" onChange={taskChangeHandler} value={enteredData} />
      <Button>Add Task</Button>

      {task.length === 0 && (
        <p>{"No Tasks Found From FireBase.\nPlease Add Some Tasks"}</p>
      )}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && !error && <Loading />}
      {task.length > 0 && <Task data={task} />}
    </Container>
  );
};
export default TaskForm;

const Container = styled.form`
  display: block;
  background-color: black;
  color: white;
  padding: 25px;
  margin: 50px;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 50%;
  border-radius: 10px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
