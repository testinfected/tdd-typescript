import Sheet from "./Sheet";

// test('cells are empty by default', () => {
//     let sheet = new Sheet();
//     expect(sheet.get("A1")).toEqual("")
//     expect(sheet.get("ZX357")).toEqual("")
// });

// test('cell content is memorized', () => {
//     let sheet = new Sheet();
//
//     sheet.put("A21", "some value")
//     expect(sheet.get("A21")).toEqual("some value")
// });
//
// test('cell content can be overridden', () => {
//     let sheet = new Sheet();
//
//     sheet.put("A21", "old value")
//     sheet.put("A21", "new value")
//     expect(sheet.get("A21")).toEqual("new value")
// });
//
// test('many cells exist', () => {
//     let sheet = new Sheet();
//
//     sheet.put("A21", "A21");
//     sheet.put("X27", "X27");
//     sheet.put("Z42", "Z42");
//
//     expect(sheet.get("A21")).toEqual("A21")
//     expect(sheet.get("X27")).toEqual("X27")
//     expect(sheet.get("Z42")).toEqual("Z42")
//
//     sheet.put("A21", "A@!");
//     expect(sheet.get("A21")).toEqual("A@!")
//     expect(sheet.get("X27")).toEqual("X27")
//     expect(sheet.get("Z42")).toEqual("Z42")
// });
//
// test('cells literal values are preserved for editing', () => {
//     let sheet = new Sheet();
//
//     sheet.put("A1", "lorem ipsum");
//     expect(sheet.getLiteral("A1")).toEqual("lorem ipsum")
//
//     sheet.put("A2", "  27   ");
//     expect(sheet.getLiteral("A2")).toEqual("  27   ")
//
//     sheet.put("A3", "=7"); // tiens tiens, une formule =)
//     expect(sheet.getLiteral("A3")).toEqual("=7")
// });
//
// test('numeric cells are recognized', () => {
//     let sheet = new Sheet();
//
//     sheet.put("A1", "text"); // une chaine
//     expect(sheet.get("A1")).toEqual("text")
//
//     sheet.put("A2", "  14  "); // un nombre
//     expect(sheet.get("A2")).toEqual("14")
//
//     sheet.put("A3", "  27  "); // toujours un nombre
//     expect(sheet.get("A3")).toEqual("27")
//
//     sheet.put("A4", " 99 X "); // pas un nombre
//     expect(sheet.get("A4")).toEqual(" 99 X ")
//
//     sheet.put("A5", " "); // juste un blanc
//     expect(sheet.get("A5")).toEqual(" ")
// });