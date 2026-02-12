const fs = require("fs");
// fs.writeFile("test.txt", "Hello, How are you?", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});