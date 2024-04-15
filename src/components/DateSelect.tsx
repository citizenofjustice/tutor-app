import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { ru } from "date-fns/locale";
import { navigate } from "astro/virtual-modules/transitions-router.js";

interface CalendarDate {
  date: Date;
  isWorking: boolean;
}

const DateSelect: React.FC<{
  activeDates: CalendarDate[];
}> = ({ activeDates }) => {
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(today);

  const checkDates = () => {
    const days = [];
    for (let i = 0; i <= 14; i++) {
      let newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      const dateWithoutTime = newDate.setHours(0, 0, 0, 0);
      const isActive = activeDates.find((item) => {
        const itemDateWithoutTime = item.date.setHours(0, 0, 0, 0);
        if (dateWithoutTime === itemDateWithoutTime) return item;
      });
      if (isActive) continue;
      days.push(newDate);
    }
    return days;
  };

  const workDays = checkDates();
  const disabledDays = [
    { before: today },
    ...workDays,
    { after: new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000) },
  ];

  console.log(disabledDays);

  const handleScheduleOpen = (date: Date) => {
    const chosenDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    navigate(`schedule/${chosenDate}`);
  };

  return (
    <>
      <Calendar
        id="calendar-date-picker"
        mode="single"
        selected={date}
        onSelect={setDate}
        className="bg-background rounded-md border border-primary-500"
        locale={ru}
        disabled={disabledDays}
        onDayClick={(date) => handleScheduleOpen(date)}
      />
    </>
  );
};

export default DateSelect;
