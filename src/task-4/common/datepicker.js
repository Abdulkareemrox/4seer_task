import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { Icons } from "./icons.jsx";
import { format } from "date-fns";

const DatePickerComponent = ({ selectedDate, onChange, header }) => {
  const [startDate, setStartDate] = useState(
    selectedDate instanceof Date && !isNaN(selectedDate)
      ? selectedDate
      : new Date()
  );

  const[date, setDate] = useState(false)

  const handleDateChange = (date) => {
    setStartDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <div className="date-picker">
      <div className="head" style={{ marginBottom: 10 }}>
        Select date
      </div>
      <div
        className="head"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>{header}</div>
        <div>{Icons?.calendar}</div>
      </div>
      <div style={{ borderBottom: "1px solid gray", margin: "10px 0px" }}></div>
      <div
        style={{
          border: "1px solid #fff",
          color: "#fff",
          padding: 10,
          marginBottom: 10,
          position: "relative",
        }}
        onClick={()=>setDate(true)}
      >
        {" "}
        {format(startDate, "dd-MM-yyyy")}
        <div className="dates">Date</div>
      </div>
    {date &&  <DatePicker
        showIcon
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        showMonthDropdown
        showYearDropdown
        inline
      />}
      <div className="d-flex justify-content-end">
        <div className="head">Cancel</div>
        <div className="head" style={{ marginLeft: 10 }}>
          OK
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
