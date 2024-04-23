import { number } from "astro/zod";
import { between, column, defineDb, defineTable } from "astro:db";

const Schedule = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    studentId: column.number({ references: () => Student.columns.id }),
    dateId: column.number({ references: () => Calendar.columns.id }),
    slotId: column.number({ references: () => Slot.columns.id }),
    disciplineId: column.number({ references: () => Discipline.columns.id }),
  },
});

const Calendar = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    date: column.date(),
    isWorking: column.boolean(),
    minBetweenClasses: column.number({ default: 15 }),
    workdayStart: column.number({ default: 8 }),
    workdayEnd: column.number({ default: 20 }),
  },
});

const Slot = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    dayId: column.number({ references: () => Calendar.columns.id }),
    start: column.date(),
    end: column.date(),
    isTaken: column.boolean(),
    isNotWorking: column.boolean(),
  },
});

const Student = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    phone: column.text(),
  },
});

const Discipline = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    priceOfHour: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Schedule, Slot, Calendar, Student, Discipline },
});
