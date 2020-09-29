const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object') {return false}
  if (members.length === 0) {return null}
  let result = '';
  let membersOrder = members.sort();
  for (let name of members) {
    if (typeof name === 'string') {
      name = name.trim(); 
      result += name[0].toUpperCase();}
    
}
return result;
};
