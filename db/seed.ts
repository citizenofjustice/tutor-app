import { Student, Discipline, db, Calendar } from "astro:db";

const disciplines = [
  { name: "химия", priceOfHour: 1000 },
  { name: "ОГЭ по химии", priceOfHour: 1000 },
  { name: "биохимия", priceOfHour: 1000 },
  { name: "ЕГЭ по химии", priceOfHour: 1000 },
  { name: "ОГЭ", priceOfHour: 1000 },
  { name: "ЕГЭ", priceOfHour: 1250 },
  { name: "обучение медицине", priceOfHour: 1400 },
  { name: "топографическая анатомия", priceOfHour: 1250 },
  { name: "микробиология", priceOfHour: 1250 },
  { name: "обучение фармакологии", priceOfHour: 1250 },
  { name: "обучение оказанию первой помощи", priceOfHour: 1250 },
  { name: "патологическая физиология", priceOfHour: 1250 },
  { name: "пропедевтика внутренних болезней", priceOfHour: 1250 },
];

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Student).values([{ name: "Andrew", phone: "999-888" }]);
  await db.insert(Discipline).values(disciplines);
  await db.insert(Calendar).values([{ date: new Date(), isWorking: true }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 10), isWorking: true }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 11), isWorking: false }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 12), isWorking: false }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 13), isWorking: true }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 14), isWorking: false }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 15), isWorking: true }]);
  await db
    .insert(Calendar)
    .values([{ date: new Date(2024, 3, 16), isWorking: true }]);
}
