const {
  revert,
  ucFirst,
  capitalize,
  pascalCase,
  palindrome,
  leet,
  findLongestWord,
  prop_access,
  type_check_v1,
  type_check_v2,
} = require("./part1");

describe("PART 1", () => {

  describe("Revert", () => {
    it("Test 1 ", async () => {
      expect(revert(3)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(revert('Hello I\'m Robert !')).toEqual('! treboR m\'I olleH');
    });

  });

  describe("UcFirst", () => {
    it("Test 1 ", async () => {
      expect(ucFirst(true)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(ucFirst('hello')).toEqual('Hello');
    });
    it("Test 3", async () => {
      expect(ucFirst('o la')).toEqual('O la');
    });

  });

  describe("Capitalize", () => {
    it("Test 1 ", async () => {
      expect(capitalize(false)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(capitalize('hello I\'m robert !')).toEqual('Hello I\'m Robert !');
    });
    it("Test 3", async () => {
      expect(capitalize('Qui sème bon grain recueille bon pain.')).toEqual('Qui Sème Bon Grain Recueille Bon Pain.');
    });

  });

  describe("PascalCase", () => {
    it("Test 1 ", async () => {
      expect(pascalCase(false)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(pascalCase('hello I\'m robert !')).toEqual('HelloI\'mRobert!');
    });
    it("Test 3", async () => {
      expect(pascalCase('Qui sème bon grain recueille bon pain.')).toEqual('QuiSèmeBonGrainRecueilleBonPain.');
    });

  });

  describe("Palindrome", () => {
    it("Test 1", async () => {
      expect(palindrome(3.14)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(palindrome('kayak')).toEqual(true);
    });
    it("Test 3", async () => {
      expect(palindrome('Kayak')).toEqual(true);
    });
    it("Test 4", async () => {
      expect(palindrome('wow')).toEqual(true);
    });
    it("Test 5", async () => {
      expect(palindrome('Allo')).toEqual(false);
    });

  });

  describe("Leet", () => {
    it("Test 1", async () => {
      expect(leet(null)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(leet('anaconda')).toEqual('4n4c0nd4');
    });
    it("Test 3", async () => {
      expect(leet('Equivalent')).toEqual('3q(_)1v4l3nt');
    });
    it("Test 4", async () => {
      expect(leet('Yollow')).toEqual('70ll0w');
    });
  });

  describe("FindLongestWord", () => {
    it("Test 1", async () => {
      expect(findLongestWord(null)).toEqual(null);
    });
    it("Test 2", async () => {
      expect(findLongestWord('Le chemin le plus cours n\'est pas toujours le meilleur')).toEqual('toujours');
    });
    it("Test 3", async () => {
      expect(findLongestWord('Prunes et melon mettent la fièvre à la maison.')).toEqual('mettent');
    });
  });

  describe("Prop_access", () => {
    it("Test 1", async () => {
      expect(prop_access({
          "animal": {
            "type": {
              "name": "dog"
            }
          }
        },
        "animal.type.name")).toEqual('dog');
    });
    it("Test 2", async () => {
      expect(prop_access({
          "animal":
            {
              "type": {
                "name": "dog"
              }
            }
        }, "animal.type"
      )).toEqual({name: "dog"});
    });
    it("Test 3", async () => {
      expect(prop_access({
          "animals":[
            {
              "type":{
                "name": "dog"
              }
            },
            {
              "type":{
                "name": "cat"
              }
            }
          ]
        }, "animals.1.type"
      )).toEqual({name: "cat"});
    });
    it("Test 4", async () => {
      expect(prop_access({
          "animals":[
            {
              "type":{
                "name": "dog"
              }
            },
            {
              "type":{
                "name": "cat"
              }
            }
          ]
        }, "chiens.1.type"
      )).toEqual(null);
    });
  });

  describe("Type check v1", () => {
    it("Test 1", async () => {
      expect(type_check_v1(1, "number")).toEqual(true);
    });
    it("Test 2", async () => {
      expect(type_check_v1('hello', "string")).toEqual(true);
    });
    it("Test 3", async () => {
      expect(type_check_v1(true, "boolean")).toEqual(true);
    });
    it("Test 4", async () => {
      expect(type_check_v1(undefined, "undefined")).toEqual(true);
    });
    it("Test 5", async () => {
      expect(type_check_v1(() => null, "function")).toEqual(true);
    });
    it("Test 6", async () => {
      expect(type_check_v1(null, "null")).toEqual(true);
    });
    it("Test 7", async () => {
      expect(type_check_v1([1,2,3], "array")).toEqual(true);
    });
    it("Test 8", async () => {
      expect(type_check_v1({ name :  'Jordan'}, "object")).toEqual(true);
    });
  });


  
  describe("Type check v2", () => {
    it("Test 1", async () => {
      expect(type_check_v2("toto", { type: "string", enum: ["toto1", "toto2"] })).toEqual(false);
    });
    it("Test 2", async () => {
      expect(type_check_v2("toto", { type: "string", enum: ["toto", "toto2"] })).toEqual(true);
    });
    it("Test 3", async () => {
      expect(type_check_v2(1, { type: "number", enum: [1, 3,8,78,45] })).toEqual(true);
    });
    it("Test 4", async () => {
      expect(type_check_v2(48, { type: "number", enum: [1, 3,8,78,45] })).toEqual(false);
    });
    it("Test 5", async () => {
      expect(type_check_v2(false, { type: "boolean" })).toEqual(true);
    });
    it("Test 6", async () => {
      expect(type_check_v2(undefined, { type: "undefined" })).toEqual(true);
    });
    it("Test 7", async () => {
      expect(type_check_v2(() => null, { type : "function" })).toEqual(true);
    });
    it("Test 8", async () => {
      expect(type_check_v2( null, { type : "null" , value: null})).toEqual(true);
    });
    it("Test 9", async () => {
      expect(type_check_v2([1,2,3], { type : "array"})).toEqual(true);
    });
    it("Test 10", async () => {
      expect(type_check_v2({ name :  'Robert'}, {type : "object", value : { name :  'Robert'} })).toEqual(true);
    });
  });

});
