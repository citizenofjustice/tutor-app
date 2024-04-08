import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { ru } from "date-fns/locale";

const DateSelect = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="m-4 bg-secondary-50 rounded-md border border-primary-500"
        locale={ru}
      />
    </>
  );
};

export default DateSelect;
