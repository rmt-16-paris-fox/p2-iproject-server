const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: results } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, results, totalPages, currentPage };
};

module.exports = { getPagingData };
