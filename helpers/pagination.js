const getPagination = (page, size) => {
  const limit = size ? Number(size) : 6;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: books } = data;
  const currentPage = page ? Number(page) : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    books,
    totalPages,
    currentPage,
  };
};

module.exports = {
  getPagination,
  getPagingData,
};
