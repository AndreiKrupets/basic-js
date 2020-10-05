const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (!Array.isArray(members)) {return false}
  if (members === 0) {return null}
  let membersOrder = members.sort();
  for (let name of members) {
    if (typeof name === 'string') {
      name = name.trim(); 
      result += name[0].toUpperCase();}
    
}
  return result;
};
