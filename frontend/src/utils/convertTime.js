const convertTime = (time) => {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    let meridiem = 'am';

    if (hours >= 12) {
        meridiem = 'pm';
        if (hours > 12) {
            hours -= 12;
        }
    }

    // Định dạng lại giờ theo định dạng 12 giờ
    const formattedHours = hours === 0 ? 12 : hours; // Nếu giờ là 0 thì là 12 giờ PM

    // Sử dụng padStart để thêm số 0 vào đầu số để có 2 chữ số
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${meridiem}`;

    return formattedTime;
};

export { convertTime };
