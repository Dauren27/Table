import React, { useState } from "react";
import "./Table.scss";
import { IoIosArrowDown } from "react-icons/io";


type additionalUserInfo={
  Зарплата: number;
  Адресс: string;
  Номер: string;
}

type userInfoType={
  ФИО: string;
  Возраст: number;
  id: number;
  ДопИнформация: additionalUserInfo;
}

interface tableProps{
  usersInfo: userInfoType[];
}

const Table:React.FC<tableProps> = ({usersInfo}) => {
  const [choosenOption, setChoosenOption] = useState("Зарплата");
  const [open, setOpen] = useState(false);
  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>ФИО</td>
          <td>Возраст</td>
          <td
            onClick={() => setOpen(!open)}
            className={`${"changableColumn"} ${open && "open"}`}
          >
            <span>{choosenOption}</span>
            <IoIosArrowDown className={`${open && "open"}`} />
          </td>
          <div className={`${"hidebar"} ${open && "open"}`}>
            {Object.keys(usersInfo[0].ДопИнформация).map((option) => (
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
        {usersInfo.map((item:any) => (
          <tr key={item.id}>
            <td>{item["id"]}</td>
            <td>{item["ФИО"]}</td>
            <td>{item["Возраст"]}</td>
            <td>{item.ДопИнформация[choosenOption]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
