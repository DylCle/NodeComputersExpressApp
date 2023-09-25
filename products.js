const fs = require('fs');


function getInventory() {
    try {
        const readJSON = fs.readFileSync('./computers.json');
        return JSON.parse(readJSON.toString());
    } catch (error){
        console.log(error);
        return []
    }
}

const getModels = (manufacturers) => {
   let inv = getInventory();
   const queryBrand = inv.filter(i => i.manufacturer.toLowerCase() === manufacturers.toLowerCase());
   return queryBrand;
}

module.exports = {
    getInventory,
    getModels
}