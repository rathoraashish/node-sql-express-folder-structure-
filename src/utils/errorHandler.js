export const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  };
  