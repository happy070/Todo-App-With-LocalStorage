import React, { useEffect, useState } from "react";
import noteicon from "/pencil.png";
import "../../src/index.css";
import { MdAddBox } from "react-icons/md";
import { Card, CardBody, Form, FormControl, FormGroup } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const getLocalItem = () => {
  let list = localStorage.getItem("list");
  console.log(list);
  return JSON.parse(list);
};
const Index = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState(getLocalItem());

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handlePress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      AddTodo();
    }
  };

  const AddTodo = () => {
    if (todo) {
      setData([...data, todo]);
      setTodo("");
    } else {
      toast.error("Enter some value");
    }
  };
  const DeleteItem = (id) => {
    const UpdatedArray = data.filter((element, index) => {
      return index !== id;
    });
    setData(UpdatedArray);
  };
  const RemoveAll = () => {
    setData([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <div className="main-div">
        <ToastContainer />
        <div className="child-div text-center">
          <div className="text-center">
            <img style={{ width: 80 }} src={noteicon} alt="" />
          </div>
          <div className="mt-2">
            {/* {JSON.stringify(todo)} */}
            <Form>
              <FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <FormControl
                    type="text"
                    placeholder="Enter Here ✍️"
                    value={todo}
                    onChange={(event) => handleChange(event)}
                    onKeyDown={handlePress}
                  />
                  <MdAddBox onClick={AddTodo} className="add-icon" size={50} />
                </div>
              </FormGroup>
            </Form>
          </div>
          <Card className="mt-2">
            {data.map((element, index) => {
              return (
                <>
                  <CardBody className="content mt-2" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{element}</span>
                      <MdDelete
                        className="deleteIcon"
                        size={30}
                        onClick={() => DeleteItem(index)}
                      />
                    </div>
                  </CardBody>
                </>
              );
            })}
          </Card>
          <div className="text-center mt-4">
            <button
              onClick={RemoveAll}
              className="btn"
              style={{ backgroundColor: "#5117cf", color: "white" }}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
