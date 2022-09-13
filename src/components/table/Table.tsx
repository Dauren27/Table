import React, { useState } from "react";
import "./Table.scss";
import { IoIosArrowDown } from "react-icons/io";

interface tableProps {
  charactersInfo: object[];
}

const Table: React.FC<tableProps> = ({ charactersInfo }) => {
  const [choosenOption, setChoosenOption] = useState("species");
  const [open, setOpen] = useState(false);
  const [additionalInfo, setAditionalInfo] = useState([
    "species",
    "status",
    "gender",
  ]);
  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Name</td>
          <td>Location</td>
          <td
            onClick={() => setOpen(!open)}
            className={`${"changableColumn"} ${open && "open"}`}
          >
            <span>{choosenOption}</span>
            <IoIosArrowDown className={`${open && "open"}`} />
          </td>
          <div className={`${"hidebar"} ${open && "open"}`}>
            {additionalInfo.map((option) => (
              <h2
                key={option}
                onClick={() => {
                  setChoosenOption(option);
                  setOpen(!open);
                }}
              >
                {option}
              </h2>
            ))}
          </div>
        </tr>
      </thead>
      <tbody>
        {charactersInfo.map((item:any) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.location.name}</td>
            <td>{item[choosenOption]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
