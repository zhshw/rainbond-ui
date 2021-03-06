let baseUrl = '';
let imageUploadUrl = '';
if (process.env.NODE_ENV === 'dev') {
  baseUrl = 'http://gr-debug.goodrain.com/';
} else if (process.env.NODE_ENV === 'development') {
  // baseUrl = '/api';
  baseUrl = 'http://dev.goodrain.org';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = `http://${process.env.CONSOLE_HOST}:${process.env.CONSOLE_PORT}` || '';
}

imageUploadUrl = `${baseUrl}/console/files/upload`;
const config = {
  baseUrl,
  imageUploadUrl,
};
export default config;
