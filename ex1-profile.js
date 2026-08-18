// 1.ประกาศตัวแปรเก็บข้อมูลส่วนตัว 5 อย่าง (ใช้ const ทั้งหมดเพราะค่าไม่เปลี่ยนแปลง)
const nickname = "ฟิวส์";
const studentid = "67110579";
const age = 21;
const major = "วิศวกรรมคอมพิวเตอร์";
const registeredCourse = 6;
const remainingYears = 2; //ใส่เป็นตัวเลขไม่ใช่ข้อความ เพื่อนำไปบวกต่อในสมการ

// 2.แสดงผลด้วย Template Literal (ใช้เครื่องหมาย Backtick ` `)
console.log(`
===== บัตรแนะนําตัว =====
ชื่อเล่น : ${nickname}
รหัสนักศึกษา : ${studentid}
อายุ : ${age} ปี
สาขาวิชา : ${major}
ลงทะเบียน : ${registeredCourse} วิชา
ปีที่จะจบ : ${2569 + remainingYears}
========================`)