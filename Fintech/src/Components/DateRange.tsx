import React from "react";
import { DateInput } from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
 const {inicio, setInicio, final, setFinal} = useData();


  return (
    <form onSubmit={(e) => e.preventDefault} className="box flex">
      {/* {inicio} */}
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {/* {final} */}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
