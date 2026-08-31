//เขียน if / else if ในการตัดเกรด แสดงผลว่า คะแนน 78 -> B+
function toGrade(score) {
    if (score < 0 || score > 100) {
        console.log(`คะแนน ${score} ไม่ถูกต้อง ต้องอยู่ในระหว่าง 0-100`);
        return;
    }
    // ทำไมต้องเรียงจากคะแนนมากไปน้อย : เพราะโปรแกรมจะตรวจสอบเงื่อนไขจากบนลงล่าง ถ้าเงื่อนไขแรกเป็นจริงแล้วมันข้ามเงื่อนไขที่เหลือทันที
    let grade;
    if (score >= 80) {
        grade = "A";
    }
    else if (score >= 75) {
        grade = "B+"
    }
    else if (score >= 70) {
        grade = "B"
    }
    else if (score >= 65) {
        grade = "C+"
    }
    else if (score >= 60) {
        grade = "C"
    }
    else if (score >= 55) {
        grade = "D+"
    }
    else if (score >= 50) {
        grade = "D"
    }
    else {
        grade = "F"
    }
    
    console.log(`คะแนน ${score} -> ${grade}`);

}

const testScores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

console.log("===== ทดสอบตัดเกรด =====");

for (const score of testScores) {
    toGrade(score);
}