import Person from "."

it("should person", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("Felipe")
})
