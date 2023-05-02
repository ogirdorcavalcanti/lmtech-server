import Person from "@/Person"

it("should person", () => {
  const person = new Person()

  expect(person.sayHello()).toBe("hello world!")
})
