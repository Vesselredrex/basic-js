function getDNSStats(domains) {
  const result = {};

  for (const domain of domains) {
    const parts = domain.split(".").reverse();
    let dns = "";

    for (const part of parts) {
      dns += `.${part}`;
      result[dns] = (result[dns] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats,
};
