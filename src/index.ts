import got, { HTTPError, ParseError } from "got";

const main = async () => {
  const response = await got("https://www.google.com");

  console.log({ code: response.statusCode, HTTPError, ParseError });
};

main();
