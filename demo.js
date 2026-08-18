console.log("ข้อความธรรมดา");
console.error("ข้อความแสดงข้อผิดพลาด");
console.warn("คำเตือน");
console.table([{ ชื่อ: "สมชาย", คะแนน : 82}, { ชื่อ: "สมหญิง", คะแนน : 91}]);

console.time("งานหนัก");
// ... โค้ดที่อยากจับเวลา
console.timeEnd("งานหนัก");  // งานหนัก: 1.523ms

const name = "สมชาย", score = 82;
console.log("ชื่อ " + name + " ได้ " + score + " คะแนน"); //แบบเก่า อ่านยาก
console.log(`ชื่อ ${name} ได้ ${score} คะแนน`); // แบบใหม่ ใช้ backtick
console.log(`ผ่านเกณฑ์: ${score >= 50 ? "ใช่" : "ไม่ใช่"}`); // ใส่นิพจน์ได้

function demo() {
    if (true) {
        var a = "ผมคือคื var";
        let b = "ผมคือคื let";
        const c = "ผมคือคื const";
    }
    console.log(a); // "ผมคือคื var" ← หลุดออกมานอกบ ลุ ล็อกได้
    console.log(b); // ReferenceError: b is not defined
}

for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }
// ได้ 3 3 3 ← ตัวแปรตัวเดียวดีถูกใช้ร่วมกันทั้งลูป
for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }
// ได้ 0 1 2 ← let สร้าง i ใหม่ทุกรอบ