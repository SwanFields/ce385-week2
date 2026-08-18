function getMenuPrice(menu) {
    switch (menu) {
        // จงใจใช้เทคนิค fall through รวม case ที่ราคา 50 บาทเข้าด้วยกันเพื่อลดการเขียนโค้ดซ้ำซ้อนกัน 3 รอบ
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50; 
        case "ผัดไทย":
            return 60;
        case "ต้มยำกุ้ง":
            return 120;
        default:
            return 0; // กรณีไม่มีในรายการอาหาร
    }
}

function getSizeMultiplier(size) {
    switch(size) {
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default:
            return 1;
    }
}

const orders = [
    {menu : "ผัดไทย", size: "พิเศษ", qty: 2},
    {menu : "ข้าวผัด", size: "ธรรมดา", qty: 3},
    {menu : "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1},
    {menu : "ข้าวหมูแดง", size: "พิเศษ", qty: 2},
    {menu : "ตำปลาร้า", size: "พิเศษ", qty: 3}, //จงใจใส่เพื่อทดสอบ Default
];

console.log("===== รายการสั่งอาหาร =====")
let totalBill = 0;

for(const order of orders) {
    const basePrice = getMenuPrice(order.menu);
    const multiplier = getSizeMultiplier(order.size);
    //สูตร : ราคาเมนู * ขนาด * จำนวน
    const itemTotal = basePrice * multiplier * order.qty;
    totalBill += itemTotal

    console.log(`${order.menu} (${order.size}) x ${order.qty} = ${itemTotal} บาท`);
}

console.log(`ยอดรวมทั้งหมด ${totalBill} บาท`)