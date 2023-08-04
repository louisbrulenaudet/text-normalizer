async function normalize(text) {
  /*
  Transforms the article title string to make it compatible with URL recommendations. 
  Clean URLs (also known as friendly URLs, pretty URLs, search-engine friendly URLs or 
  RESTful URLs) are web addresses or uniform resource locators (URLs) designed to 
  improve the usability and accessibility of a website, web application or web service 
  by being immediately and intuitively understandable to non-expert users.

  Parameters
  ----------
  text : str
    The string of the title of the article used to construct the URL.

  Returns
  -------
  friendlyURL : str
    The friendly string used as URL for the article.
  */
  let friendlyURL = text.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );

  friendlyURL = friendlyURL.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  friendlyURL = friendlyURL.replace(/\s+/g, "-").toLowerCase();

  while (friendlyURL.charAt(friendlyURL.length - 1) === "-") {
    friendlyURL = friendlyURL.replace(/.$/, "");
  };

  return friendlyURL;
};

module.exports = {normalize};
