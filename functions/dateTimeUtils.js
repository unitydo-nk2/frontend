export const dateTimeUtil = {
  getDateTime: function (dateTime) {
    return this.getDate(dateTime) + " " + this.getTime(dateTime);
  },
  getDate: function (dateTime) {
    return new Date(dateTime).toDateString();
  },
  getTime: function (dateTime) {
    return new Date(dateTime).toTimeString().slice(0, 5);
  }
};
