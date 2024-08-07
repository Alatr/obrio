// @ts-nocheck

const POLL_SHAPE_OBJECT = {
  "0q": "Q",
  "1q": {
    type: "C",
    "1q0a": {
      "2q": "Q",
      "3q": "Q",
      "4q": {
        type: "C",
        "4q0a": {
          "5q": "Q",
          "7q": "Q",
          "14q": "Q",
        },
        "4q1a": {
          "15q": "Q",
          "8q": "Q",
          "14q": "Q",
        },
      },
    },
    "1q1a": {
      "6q": "Q",
      "9q": "Q",
      "10q": "Q",
      "11q": "Q",
      "12q": "Q",
      "13q": "Q",
      "14q": "Q",
    },
  },
};

function convertToMap(obj) {
  const map = new Map();

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      map.set(key, convertToMap(value));
    } else {
      map.set(key, value);
    }
  });

  return map;
}

export const POLL_SHAPE = new Map(convertToMap(POLL_SHAPE_OBJECT));
