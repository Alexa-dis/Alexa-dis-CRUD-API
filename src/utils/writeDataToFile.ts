import fs from "fs";

const writeDataToFile = (fileName: any, content: any) => {
  fs.writeFile(fileName, JSON.stringify(content), (error) => {
    console.log(error)
  });
};

export default writeDataToFile;
