module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  page.removeAllListeners('console'); // disables browser log output in backstop log
  await require('./loadCookies')(browserContext, scenario);
};
