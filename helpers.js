import slugify from "slugify";

export const slugit = (str) =>
  slugify(str, {
    lower: true,
    strict: true,
  });

//test
// test2 for commit
