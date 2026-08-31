const isValidScore = (score) => {
    if (score >= 0 && score <= 100) {
        return true;
    } else {
        return false;
    }
};

function toGrade(score){
    if (isValidScore(score)) {
        if (score >= 80){
            return "A";
        } else if (score >= 75){
            return "B+";
        } else if (score >= 70){
            return "B";
        } else if (score >= 65){
            return "C+";
        } else if (score >= 60){
            return "C";
        } else if (score >= 55){
            return "D+";
        } else if (score >= 50){
            return "D";
        } else {
            return "F";
        }
    } else {
        return "Invalid score";
    }
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

const student1 = {
    name : "กฤศ",
    workshop : 48,
    attendance: 10,
    project: 18,
    midterm: 20,
    final: 25
};

const student2 = {
    name: "ปภาดา",
    workshop: 52,
    attendance: 12,
    project: 17,
    midterm: 22,
    final: 28
};

const student3 = {
    name: "ธนัท",
    workshop: 45,
    attendance: 9,
    project: 20,
    midterm: 18,
    final: 24
};

const student4 = {
    name: "ณิชาภัทร",
    workshop: 60,
    attendance: 11,
    project: 15,
    midterm: 25,
    final: 27
};

const student5 = {
    name: "สราวุธ",
    workshop: 50,
    attendance: 10,
    project: 19,
    midterm: 21,
    final: 23
};

const student6 = {
    name: "พิมพ์ชนก",
    workshop: 58,
    attendance: 13,
    project: 16,
    midterm: 19,
    final: 26
};