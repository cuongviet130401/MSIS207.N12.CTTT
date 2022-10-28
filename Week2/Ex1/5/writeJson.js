var proj = {
    Name : "CuongViet",
};
const fs = require('fs');
fs.writeFile(`file.json`, JSON.stringify(proj), (error) => {
    if (error) throw error;
});