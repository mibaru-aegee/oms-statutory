const moment = require('moment');

const { Sequelize, sequelize } = require('../lib/sequelize');

const Attendance = sequelize.define('attendance', {
    starts: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: '',
        validate: {
            notEmpty: { msg: 'Attendance start date should be set.' },
            isDate: { msg: 'Attendance start date should be valid.' }
        }
    },
    ends: {
        type: Sequelize.DATE,
        validate: {
            notEmpty: { msg: 'Attendance end date should be set.' },
            isDate: { msg: 'Attendance end date should be valid.' },
            laterThanStart(val) {
                if (moment(val).isSameOrBefore(this.starts)) {
                    throw new Error('Event cannot start after or at the same time it ends.');
                }
            }
        }
    }
}, { underscored: true, tableName: 'attendances' });

module.exports = Attendance;
