import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

// name, age, enjoys, image

const CatNew = ({createCat}) => {
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    // Spread operator to make a copy of our state object
    // e.target.name will tell us which key we are updating based on the input
    // e.target.value will tell us what the value is on that input
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
      <h2>Create a Cat!</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name:
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="What is your name?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age:
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="What is your age?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys:
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="What is your enjoys?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image:
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="What is your image?"
            type="url"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew
