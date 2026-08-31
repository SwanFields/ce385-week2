//1.) สร้างตัวแปรเก็บตัวเลขคงที่เพราะโจทย์ห้ามพิมเลขดิบ
const max_workshopRaw = 60;
const max_workshopactual = 20;
const max_totalScore = 100;
const targetScore = 80;

//สร้างตัวแปรเก็บคะแนนดิบ
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

//2.) คำนวณคะแนน
const workshopActual = (workshopRaw / max_workshopRaw) * max_workshopactual; //แปลงคะแนน Workshop ตามสูตรของวิชา (คะแนนดิบ ÷ 60) × 20
const totalScore = workshopActual + attendance + project + midterm + final; //คำนวณคะแนนรวมทั้งหมดโดยเอาคะแนนที่แปลงแล้วมาบวกกับคะแนนส่วนอื่น)
const percentage = (totalScore / max_totalScore) * 100; // คำนวณว่าคะแนนรวมคิดเป็นกี่เปอร์เซ็นต์ของคะแนนเต็ม 100
const pointsNeeded = targetScore - totalScore; //คำนวณว่ายังขาดอีกกี่คะแนนจึงจะได้ 80 คะแนน สามารถติดลบไปก่อนได้

//3.) แสดงผลเป็นใบสรุปคะแนน Template Litteral
console.log(`
===== สรุปคะแนนวิชา CE385 =====
คะแนน Workshop (แปลงแล้ว) : ${workshopActual.toFixed(2)} / ${max_workshopactual}
คะแนนรวมทั้งหมด          : ${totalScore.toFixed(2)} / ${max_totalScore}
คิดเป็นเปอร์เซ็นต์          : ${percentage.toFixed(2)}%
คะแนนที่ต้องการถึงจะไปถึง 80 คะแนน  : ${pointsNeeded.toFixed(2)} คะแนน
================================`)