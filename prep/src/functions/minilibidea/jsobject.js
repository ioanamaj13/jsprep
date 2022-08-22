export const testobj = {
  value: 0,
  add: function (x) {
    this.value += x;
    return this;
  },
  multiply: function (x) {
    this.value *= x;
    return this;
  },
  sub: function (x) {
    this.value -= x;
    return this;
  },
  divide: function (x) {
    this.value /= x;
    return this;
  },
  get: function () {
    return testobj.value;
  },
};
