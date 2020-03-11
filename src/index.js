//index.js
const gdrive = require("./gdrive");
const path = require('path');

gdrive.imageUpload("pai_e_filho.jpg", path.resolve(__dirname, '..', 'tmp/pai_e_filho.jpg'), (id) => {
    console.log(id);
})

/* gdrive.imageUpload("pai_e_filho.jpg", "MS-D/projects/backend-week6/tmp/pai_e_filho.jpg", (id) => {
    console.log(id);
}); */