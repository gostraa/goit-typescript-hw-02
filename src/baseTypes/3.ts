let some: unknown;
some = "Text";
let str: string;

//  перевіряю тип щоб правильно присвоїти значення змінній str
if (typeof some === "string") {
  str = some;
}

export {};
