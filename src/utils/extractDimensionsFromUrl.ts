const extractDimensionsFromUrl = (url?: string) => {
  const regex = /\/(\d+)x(\d+)\//;
  const match = url?.match(regex);

  if (match) {
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);

    return { width, height };
  }

  return { width: 100, height: 100 };
};

export default extractDimensionsFromUrl;