import Title from "antd/es/typography/Title";
import React, { useState, useEffect } from "react";
import { ALGORITHMS } from "../../constants/menu";

interface Props {
  listValue?: Array<string>;
  algorithms: number;
}
const CardSort: React.FC<Props> = ({ algorithms, listValue }) => {
  const [value, setValue] = useState<Array<string>>();
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (listValue) {
      const startTimeSort = performance.now();
      const newValue = ALGORITHMS[algorithms].sort([...listValue]);
      const endTimeSort = performance.now();
      setTime(endTimeSort - startTimeSort);
      setValue(newValue);
    }
  }, [algorithms, listValue]);
  return (
    <div>
      <Title level={3}>{ALGORITHMS[algorithms].name}</Title>
      <p>
        Thời gian sắp xếp:{" "}
        <span style={{ color: "red" }}>{` ${time.toFixed(2)}ms`}</span>
      </p>
      <div className="input output">{JSON.stringify(value)}</div>
    </div>
  );
};

export default CardSort;
