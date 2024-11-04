import morgan from 'morgan';

// Configure Morgan to log in the 'combined' format
export const requestLogger = morgan('combined');
