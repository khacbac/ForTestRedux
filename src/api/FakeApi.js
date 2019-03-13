const datas = [
  {
    id: 0,
    name: "ho khac bac",
    age: 26
  },
  {
    id: 1,
    name: "truong phuong thao",
    age: 21
  },
  {
    id: 2,
    name: "ronaldo",
    age: 29
  },
  {
    id: 4,
    name: "messi",
    age: 27
  },
  {
    id: 5,
    name: "tao van hung",
    age: 26
  },
  {
    id: 6,
    name: "luffy",
    age: 26
  }
];

const API_TYPE = {
  SUCCESS: 0,
  LOADING: 1,
  ERROR: 2
};

const getUser = async type => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == API_TYPE.SUCCESS) {
        resolve(datas);
      } else if (type == API_TYPE.ERROR) {
        resolve(null);
      }
    }, 2000);
  });
};

export { getUser, API_TYPE };
