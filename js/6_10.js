// спробувати вирішити закоментоване
const getSortedUniqueSkills = users => {
  // твой код
  return users
    .reduce((allSkills, user) => {
      user.skills.forEach(skill => {
        if (!allSkills.includes(skill)) {
          allSkills.push(skill);
        }
      });
      return allSkills;
      // return user.skills.filter(skill => !allSkills.includes(skill));
    }, [])
    .sort();
};

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
