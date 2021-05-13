import slugify from "slugify";

export const slugit = (str) =>
  slugify(str, {
    lower: true,
    strict: true,
  });

export const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);
