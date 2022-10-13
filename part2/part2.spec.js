const {
  Mapi,
  getHashTags,
  removeDuplicate,
  intersection,
  arrayDiff,
  combinations,
  fiscalCode,
  lcm,
  merge,
  getStudents,
  getCourses,
  getStudentsCourses,
} = require("./part2");

describe("PART 2", () => {

  describe("Mapi", () => {
    it("Test 1", () => {
      const map = new Mapi([['hero', true], ['moldu', false]]);

      map.set(1, 'oui');
      map.set(2, 'non');
      expect(map.values()).toEqual(["oui", "non", true, false]);

      map.set(2, 'oui');
      expect(map.values()).toEqual(["oui", "oui", true, false]);

      map.delete(1);
      expect(map.keys()).toEqual(["2", "hero", "moldu"]);

      map.set('az-56-0abdo35', 3);
      expect(map.get('az-56-0abdo35')).toEqual(3);
      expect(map.has(1)).toEqual(false);
      expect(map.has(2)).toEqual(true);
      expect(map.size).toEqual(4);

    });

  });

  describe("Get HashTags", () => {
    it("Test 1 ", async () => {
      expect(getHashTags("How the Avocado Became the Fruit of the Global Trade")).toEqual(["#avocado", "#became", "#global"]);
    });
    it("Test 2", async () => {
      expect(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")).toEqual(["#christmas", "#probably", "#will"]);
    });
    it("Test 3", async () => {
      expect(getHashTags("Hey Parents , Surprise , Fruit Juice Is Not Fruit")).toEqual(["#surprise", "#parents", "#fruit"]);
    });
    it("Test 4", async () => {
      expect(getHashTags("Visualizing Science")).toEqual(["#visualizing", "#science"]);
    });

  });

  describe("Remove duplicate", () => {
    it("Test 1 ", async () => {
      expect(removeDuplicate([0, 2, 4, 6, 8, 8])).toEqual([0, 2, 4, 6, 8]);
    });
    it("Test 2 ", async () => {
      expect(removeDuplicate(['0', '2', '4', '6', '8', '8'])).toEqual(['0', '2', '4', '6', '8']);
    });
    it("Test 3 ", async () => {
      expect(removeDuplicate(['0', '2', '4', '6', 8, '8'])).toEqual(['0', '2', '4', '6', 8, '8']);
    });

  });

  describe("Intersection", () => {
    it("Test 1 ", async () => {
      expect(intersection([0, 2, 4, 6, 8, 8], [1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
    it("Test 2 ", async () => {
      expect(intersection([0, 2, 4, 6, 8, 8], [1, 2, 3, 4, 5, 6, 8])).toEqual([2, 4, 6, 8]);
    });
  });

  describe("Array diff", () => {
    it("Test 1 ", async () => {
      expect(arrayDiff([0, 2, 4, 6, 8, 8], [1, 2, 3, 4, 5, 6])).toEqual([0, 8, 8, 1, 3, 5]);
    });
    it("Test 2 ", async () => {
      expect(arrayDiff([32, 6, 76, 'a', '32'], ['32', 32, 3, 4, 5, 6, 8])).toEqual([76, 'a', 3, 4, 5, 8]);
    });
  });

  describe("Combinations", () => {
    it("Test 1 ", async () => {
      expect(combinations(2, 3)).toEqual(6);
    });
    it("Test 2 ", async () => {
      expect(combinations(3, 7, 4)).toEqual(84);
    });
    it("Test 3 ", async () => {
      expect(combinations(2, 3, 4, 5)).toEqual(120);
    });
  });

  describe("Combinations", () => {
    it("Test 1 ", async () => {
      expect(combinations(2, 3)).toEqual(6);
    });
    it("Test 2 ", async () => {
      expect(combinations(3, 7, 4)).toEqual(84);
    });
    it("Test 3 ", async () => {
      expect(combinations(2, 3, 4, 5)).toEqual(120);
    });
  });

  describe("FiscalCode", () => {
    it("Test 1 ", async () => {
      expect(fiscalCode({
        name: "Matt",
        surname: "Edabit",
        gender: "M",
        dob: "1/1/1900"
      })).toEqual("DBTMTT00A01");
    });
    it("Test 2 ", async () => {
      expect(fiscalCode({
        name: "Helen",
        surname: "Yu",
        gender: "F",
        dob: "1/12/1950"
      })).toEqual("YUXHLN50T41");
    });
    it("Test 3 ", async () => {
      expect(fiscalCode({
        name: "Mickey",
        surname: "Mouse",
        gender: "M",
        dob: "16/1/1928"
      })).toEqual("MSOMKY28A16");
    });
  });

  describe("Last common multiple", () => {
    it("Test 1", async () => {
      expect(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(2520);
    });
    it("Test 2", async () => {
      expect(lcm([5])).toEqual(5);
    });
    it("Test 3", async () => {
      expect(lcm([5, 7, 11])).toEqual(385);
    });
    it("Test 4", async () => {
      expect(lcm([5, 7, 11])).toEqual(385);
    });
    it("Test 4", async () => {
      expect(lcm([5, 7, 11, 35, 55, 77])).toEqual(385);
    });
  });

  describe("Merge", () => {
    const object = {
      a: [{x: 2}, {y: 4}],
      b: 1
    };
    const other = {
      a: {z: 3},
      b: [2, 3],
      c: 'foo'
    };
    it("Test 1", async () => {
      expect(merge(object, other)).toEqual({"a": [{"x": 2}, {"y": 4}, {"z": 3}], "b": [1, 2, 3], "c": "foo"});
    });
  });

  describe("Promises", () => {

    const students = [{name: "Dupont", cours: [1, 3, 5]}, {name: "Lea", cours: [2, 4, 11]}, {
      name: "Charles",
      cours: [1]
    }];
    const courses = [{id: 1, name: "JS"}, {id: 2, name: "PHP"}, {id: 3, name: "C#"}, {id: 4, name: "F#"}, {
      id: 5,
      name: "CSS"
    }];
    const studentsCourses = [{
      "name": "Dupont",
      "cours": [{"id": 1, "name": "JS"}, {"id": 3, "name": "C#"}, {"id": 5, "name": "CSS"}]
    }, {"name": "Lea", "cours": [{"id": 2, "name": "PHP"}, {"id": 4, "name": "F#"}]}, {
      "name": "Charles",
      "cours": [{"id": 1, "name": "JS"}]
    }];

    it("Test 1", async () => {
      const startTime = Date.now();
      const result = await getStudents();
      const endTime = Date.now();
      const timeExecution = endTime - startTime;
      expect(result).toEqual(students);
      expect(timeExecution).toBeGreaterThanOrEqual(1000);
      expect(timeExecution).toBeLessThan(4000);
    });

    it("Test 2", async () => {
      const startTime = Date.now();
      const result = await getCourses();
      const endTime = Date.now();
      const timeExecution = endTime - startTime;
      expect(result).toEqual(courses);
      expect(timeExecution).toBeGreaterThanOrEqual(1000);
      expect(timeExecution).toBeLessThan(2000);
    });

    it("Test 3", async () => {
      const startTime = Date.now();
      const result = await getStudentsCourses();
      const endTime = Date.now();
      const timeExecution = endTime - startTime;
      expect(result).toEqual(studentsCourses);
      expect(timeExecution).toBeGreaterThanOrEqual(1000);
      expect(timeExecution).toBeLessThan(4000);
    });

  });


});
