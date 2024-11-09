function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K] {
  return obj[key];
}

const person1 = { name: "Alice", age: 30 };
console.log(getProperty(person1, "name"));
