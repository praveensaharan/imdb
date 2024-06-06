const fs = require("fs");

// Function to check if any required data is missing
function checkMissingData(data) {
  const requiredFields = ["image_src", "url", "title", "wiki_page", "summary"];
  const missingData = [];

  data.forEach((item, index) => {
    requiredFields.forEach((field) => {
      if (!item.hasOwnProperty(field) || !item[field]) {
        missingData.push({ index: index, field: field });
      }
    });
  });

  return missingData;
}

// Example usage
const filePath = "movies_data1.json";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const jsonData = JSON.parse(data);
  const missingData = checkMissingData(jsonData);

  if (missingData.length > 0) {
    console.log("Missing data:");
    missingData.forEach((item) => {
      console.log(
        `Index ${item.index}: Field "${item.field}" is missing or empty.`
      );
    });
  } else {
    console.log("No missing data.");
  }
});
