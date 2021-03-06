// Age

module.exports = {

    age: function age(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();


        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

        return age;
    },
    date: function(timestamp) {
        const date = new Date(timestamp);

        // year-month - day 
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`
        const day = `0${date.getUTCDate()}`
            // console.log(`${year} - ${month} - ${day}`);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }

}