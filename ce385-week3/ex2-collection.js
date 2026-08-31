const students = [
  {
    id: "0579",
    name: "ฟิวส์",
    major: "CE",
    score: 84,
    contact: {
      email: "67110579@dpu.ac.th",
      phone: "0644831777"
    }
  },
  {
    id: "0580",
    name: "นัท",
    major: "CE",
    score: 60,
    contact: {
      email: "67110580@dpu.ac.th",
      phone: "0812345678"
    }
  },
  {
    id: "0581",
    name: "มิน",
    major: "CE",
    score: 79,
    contact: {
      email: "67110581@dpu.ac.th",
      phone: "0898765432"
    }
  },
  {
    id: "0582",
    name: "อารียา",
    major: "CE",
    score: 91,
    contact: {
      email: "67110582@dpu.ac.th",
      phone: "0923456789"
    }
  },
  {
    id: "0583",
    name: "เข็ม",
    major: "CE",
    score: 76,
    contact: {
      email: "67110583@dpu.ac.th",
      phone: "0954321987"
    }
  },
  {
    id: "0584",
    name: "ปาล์ม",
    major: "CE",
    score: 88,
    contact: {
      email: "67110584@dpu.ac.th",
      phone: "0634567890"
    }
  }
];

function findById(students, id){
    return students.find(student => student.id === id);
}

function findByMajor(students, major){
    return students.filter(student => student.major === major);
}

function hasFailingStudent(students){
    return students.some(student => student.score < 50);
}

function getEmail(students, id){
    const student = findById(students, id);
    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
}

console.log("หา ID 9999: ", findById(students, 9999));
console.log("อีเมล ID 9999: ", getEmail(students, 9999));

const newStudent = {
    id: "0599",
    name: "เฟิส",
    major: "CE",
    score: 90,
    contact: {
      phone: "0644864111"
    }
  };

const updatedStudents = [...students, newStudent];

console.log("อีเมลเด็กใหม่ : ", getEmail(updatedStudents, "0599"));