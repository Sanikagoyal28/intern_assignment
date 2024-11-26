import { Col, Input, Row, TimePicker } from "antd";
import { Select } from "antd";
import { Button } from "antd";
import { Form } from "antd";
import { useState } from "react";

export default function FormComponent() {
  const { TextArea } = Input;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    time: "",
    message: "",
    option: "",
  });

  function handleSelect(val) {
    setFormState((prev) => ({
      ...prev,
      option: val,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleTimeChange(time) {
    setFormState((prev) => ({
      ...prev,
      time: time,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <p className="contact">Contact Us</p>
          <p className="appoint">Make an appointment</p>

          <Row className="row" gutter={20}>
            <Col lg={12} sm={24} xs={24}>
              <Input
                className="input"
                placeholder="Full Name"
                required
                value={formState.name}
                onChange={handleChange}
                name="name"
              />
            </Col>

            <Col lg={12} sm={24} xs={24}>
              <Input
                className="input"
                placeholder="Email"
                required
                value={formState.email}
                onChange={handleChange}
                name="email"
              />
            </Col>
          </Row>
          <Row className="row" gutter={20}>
            <Col lg={12} sm={24} xs={24}>
              <Select
                className="select"
                placeholder="Please Select"
                onChange={handleSelect}
                required
              >
                <Select.Option value="Abc">Abc</Select.Option>
              </Select>
            </Col>

            <Col lg={12} sm={24} xs={24}>
              <TimePicker
                className="input"
                required
                style={{ width: "100%" }}
                onChange={handleTimeChange}
                name="time"
              />
            </Col>
          </Row>

          <TextArea
            rows={4}
            placeholder="Message"
            className="input"
            id="textarea"
            required
            value={formState.message}
            onChange={handleChange}
            name="message"
          />
          <Button className="button" htmlType="submit">
            Book Appointment
          </Button>
        </form>
      </div>
    </>
  );
}
