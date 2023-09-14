import { useState } from "react";
import { generateRandomArray } from "./../utils/random";
import CardSort from "./Component/CardSort";
import { Select, Row, Col, Button } from "antd";
import { OPTIONS } from "./constants/menu";
import Header from "./Component/Header";
import "./App.css";
function App() {
  const [listValue, setListValue] = useState<Array<string>>(
    generateRandomArray(1000)
  );
  const [algorithms, setAlgorithms] = useState<number>(0);
  const handleRandomValue = () => {
    setListValue(generateRandomArray(1000));
  };
  const onChangeAlgorithms = (e: number) => {
    setAlgorithms(e);
  };
  return (
    <div className="container">
      <Header />
      <div className="input">{JSON.stringify(listValue, null, 2)}</div>
      <Row justify="space-around">
        <Col span={6}>
          <Button type="primary" onClick={handleRandomValue}>
            Random mảng
          </Button>
        </Col>
        <Col span={6}>
          <Select
            options={OPTIONS}
            style={{ width: 153 }}
            placeholder="Chọn thuật toán sắp xếp"
            onChange={onChangeAlgorithms}
            value={algorithms}
          />
        </Col>
      </Row>

      <CardSort algorithms={algorithms} listValue={listValue} />
    </div>
  );
}

export default App;
