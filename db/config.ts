import { column, defineDb, defineTable } from "astro:db";

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
  },
});

const Slot = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    number: column.number(),
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
