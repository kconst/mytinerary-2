const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true

// toBeFalsy matches anything that an if statement treats as false ::::: if (false)
// if (null)
// if (undefined)
// if (0)
// if (NaN)
// if ('')
// if ("")
// if (``)
// if (document.all)

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("user should be shadan behzadian object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "shadan",
    lastName: "behzadian"
  });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("should be under or equal 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex --> regular expresions
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  usernames = ["Mary", "Emy", "Admin"];
  expect(usernames).toContain("Admin");
});

//working with async data / promise
test("user fetchedname should be Leanne Graham", () => {
  //assersions is used to make sure the a certain number of assersions get called, to make sure assersion of call back
  //here .then( ) is get called
  //you can leave out the expect.assersions( ) out and the test will still work
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//async await

test("user fetchedname should be Leanne Graham", async () => {
  //assersions is used to make sure the a certain number of assersions get called, to make sure assersion of call back
  //here .then( ) is get called
  //you can leave out the expect.assersions( ) out and the test will still work
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
