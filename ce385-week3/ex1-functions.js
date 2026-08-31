const isValidScore = (score) => {
    if (score >= 0 && score <= 100) {
        return true;
    } else {
        return false;
    }
};

const GRADE_CRITERIA = [
    { min: 80, grade: "A" },
    { min: 75, grade: "B+" },
    { min: 70, grade: "B" },
    { min: 65, grade: "C+" },
    { min: 60, grade: "C" },
    { min: 55, grade: "D+" },
    { min: 50, grade: "D" },
    { min: 0,  grade: "F" }
];

function toGrade(score){
    if (!isValidScore(score)) return "Invalid Score";
    const result = GRADE_CRITERIA.find(criteria => score >= criteria.min);
    return result.grade;
}

const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
    if (isValidScore(raw) && isValidScore(full) && isValidScore(weight)) {
        return (raw / full) * weight;
    } else {
        return 0;
    }
};

function calculateTotal(workshop, attendance, project, midterm, final){
    if (isValidScore(workshop) && isValidScore(attendance) && isValidScore(project) && isValidScore(midterm) && isValidScore(final)) {
        return (workshop + attendance + project + midterm + final);
    } else {
        return 0;
    }
}

const mockStudents = [{
    name : "กฤศ",
    workshopRaw : 48,
    attendance: 10,
    project: 18,
    midterm: 20,
    final: 25
},
{
    name: "ปภาดา",
    workshopRaw: 52,
    attendance: 12,
    project: 17,
    midterm: 22,
    final: 28
},
{
    name: "ธนัท",
    workshopRaw: 45,
    attendance: 9,
    project: 20,
    midterm: 18,
    final: 24
}];

const sumaryResults = mockStudents.map(std => {
    const wsScore = calculateWorkshopScore(std.workshopRaw);
    const totalScore = calculateTotal(wsScore, std.attendance, std.project, std.midterm, std.final);
    return {
        "ชื่อ": std.name,
        "คะแนนเวิร์กช็อป": +wsScore.toFixed(2),
        "คะแนนรวม": +totalScore.toFixed(2),
        "เกรด": toGrade(totalScore)
    };
});

console.log("======= ตารางสรุปผล =======")
console.table(sumaryResults);
console.log("\n======= พิสูจน์ค่าเริ่มต้น =======")
console.log("เคส 1: ", calculateWorkshopScore(48));
console.log("เคส 2: ", calculateWorkshopScore(48,60,20)); 
// อธิบาย: ผลลัพธ์ 2 บรรทัดบนได้เท่ากันคือ 16 เพราะถ้าเราไม่ส่งค่า full กับ weight เข้าไป มันจะไปดึงค่า default (60 และ 20) มาใช้
console.log*("เคส 3: ", calculateWorkshopScore(48, undefined, 25));
// อธิบาย: การส่ง undefined ไปตรงกลาง คือการบอกให้ฟังก์ชันกลับไปใช้ค่า default ส่วนค่า weight ด้านหลังสุดจะถูกแทนที่ด้วย 25 ตามที่เราส่งไป