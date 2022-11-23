export const getCategoryClassName = (category) => {
  let postFix = "";
  switch (category) {
    case "animal":
    case "history":
    case "sport":
      postFix = "a";
      break;
    case "career":
    case "money":
    case "travel":
      postFix = "b";
      break;
    case "celebrity":
    case "movie":
      postFix = "c";
      break;
    case "dev":
    case "music":
      postFix = "d";
      break;
    case "explicit":
    case "political":
      postFix = "e";
      break;
    case "fashion":
    case "religion":
      postFix = "f";
      break;
    default:
      postFix = "default";
      break;
  }
  return `category-${postFix}`;
};

export const SHOWING_COUNT = 6;