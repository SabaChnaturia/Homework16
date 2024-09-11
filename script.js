let time = prompt("მიუთითეთ საათი მაგ(10:00)");
let period = prompt("მიუთითეთ დღის ნახევარი Pm/Am");

function convertTo24Hour(time, period) {
    let [hours, minutes] = time.split(':').map(Number);

    if (period.toUpperCase() === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period.toUpperCase() === 'AM' && hours === 12) {
        hours = 0;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
console.log(convertTo24Hour(time, period));
