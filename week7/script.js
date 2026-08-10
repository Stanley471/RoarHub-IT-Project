const student = [
  {
    name: 'Joy',
    department: 'Computer Science',
    level: '300',
    courses: 'Cos 311, ',
    email: 'joydicksond202@gmail.com',
    isRegistered: true,
  },

  {
    name: 'Gift',
    department: 'Civil Engineering',
    level: '200',
    courses: '',
    email: 'giftfavour@gmail.com',
    isRegistered: true,
  },

  {
    name: 'Precious',
    department: 'Medicine & Surgery',
    level: '100',
    courses: 'anatomy, physiology',
    email: 'precious2@gmail.com',
    isRegistered: true,
  },

  {
    name: 'Faith',
    department: 'Physiology',
    level: '400',
    courses: '',
    email: 'faithukah@gmail.com',
    isRegistered: true,
  },

  {
    name: 'Elizabeth',
    department: 'Computer Robotics',
    level: '100',
    courses: '',
    email: 'lizzy02@gmail.com',
    isRegistered: true,
  },

  {
    name: 'David',
    department: 'Mathematics',
    level: '400',
    courses: 'MTH 411, MTH 453',
    email: 'davis202@gmail.com',
    isRegistered: true,
  },
];

const studentListContainer = document.getElementById('studentList');
console.log(studentListContainer);

studentListContainer.innerHTML = student
  .map((std) => {
    return `<div class='studentCard'> 
    <h3> ${std.name} </h3>
    <h3> ${std.department} </h3>
    <h3> ${std.level} </h3>
    <h3> ${std.email} </h3>
    <h3> ${std.courses} </h3>
    ${std.isRegistered ? `<p> Registered </p>` : `<p> Not Registered </p>`}

<ul>
    ${student.friends
        .map(friend => `<li> ${friend} </li>`)
    }
  })
  .join('')
</ul>

</div>
`).join("");