//index.js
const gdrive = require("./gdrive");
gdrive.imageUpload("pai_e_filho.jpg", "MS-D/projects/backend-week6/tmp/pai_e_filho.jpg", (id) => {
    console.log(id);
});