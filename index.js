let time = {
    ms: function ms(time='') {
        const year = ['year', 'years', 'y'];
        const month = ['month', 'months', 'mon'];
        const day = ['day', 'days', 'd'];
        const hour = ['hour', 'hours', 'h'];
        const minute = ['minute', 'minutes', 'mins', 'min', 'm'];
        const second = ['second', 'seconds', 'sec', 'secs', 's'];

        const arg = time.split(' ');
        const timeValue = parseInt(arg[0]);
        const timeType = arg[1];

        if(year.includes(timeType)) {
            return timeValue * 31536000000;
        }
        if(month.includes(timeType)) {
            return timeValue * 2628000000;
        }
        if(day.includes(timeType)) {
            return timeValue * 86400000;
        }
        if(hour.includes(timeType)) {
            return timeValue * 3600000;
        }
        if(minute.includes(timeType)) {
            return timeValue * 60000;
        }
        if(second.includes(timeType)) {
            return timeValue * 1000;
        }
    },
    humanize: function humanize(miliseconds=0) {
        let value = new Array();
        let remainder = new Array();
        remainder.push(miliseconds);

        if(remainder[0] >= 31536000000) { //years
            const year = parseInt(remainder[0] / 31536000000);
            value.push(year);
            if(remainder[0] >= 31536000000 && remainder[0] < 63072000000) {
                value.push('year');
            }
            if(remainder[0] >= 63072000000) {
                value.push('years');
            }
            remainder[0] %= 31536000000;
            if(remainder[0] === 0) return value.join(' ');
        }
        
        if(remainder[0] >= 2628000000) { //months
            const month = parseInt(remainder[0] / 2628000000);
            value.push(month);
            if(remainder[0] >= 2628000000 && remainder[0] < 5256000000) {
                value.push('month');
            }
            if(remainder[0] >= 5256000000) {
                value.push('months');
            }
            remainder[0] %= 2628000000;
            if(remainder[0] === 0) return value.join(' ');
        }
        
        if(remainder[0] >= 86400000) { //days
            const day = parseInt(remainder[0] / 86400000);
            value.push(day);
            if(remainder[0] >= 86400000 && remainder[0] < 172800000) {
                value.push('day');
            }
            if(remainder[0] >= 172800000) {
                value.push('days');
            }
            remainder[0] %= 86400000;
            if(remainder[0] === 0) return value.join(' ')
        }
        if(remainder[0] >= 3600000) { //hours
            const hour = parseInt(remainder[0] / 3600000);
            value.push(hour);
            if(remainder[0] >= 3600000 && remainder[0] < 7200000) {
                value.push('hour');
            }
            if(remainder[0] >= 7200000) {
                value.push('hours');
            }
            remainder[0] %= 3600000;
            if(remainder[0] === 0) return value.join(' ')
        }
        if(remainder[0] >= 60000) { //mins
            const min = parseInt(remainder[0] / 60000);
            value.push(min);
            if(remainder[0] >= 60000 && remainder[0] < 120000) {
                value.push('minute');
            }
            if(remainder[0] >= 120000) {
                value.push('minutes');
            }
            remainder[0] %= 60000;
            if(remainder[0] === 0) return value.join(' ')
        }
        if(remainder[0] >= 1000) { //sec
            const sec = parseInt(remainder[0] / 1000);
            value.push(sec);
            if(remainder[0] >= 1000 && remainder[0] < 2000) {
                value.push('second');
            }
            if(remainder[0] >= 2000) {
                value.push('seconds');
            }
            remainder[0] %= 1000;
            if(remainder[0] === 0) return value.join(' ')
        }

        return value.join(' ');
    }
}

module.exports = time;