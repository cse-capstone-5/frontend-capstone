export const DOMAIN = 'https://sentimeter-backend.run.goorm.site'

export const createRequestUrl = (suffix) => `${DOMAIN}/${suffix}`

export const caseConverterOptions = {
  caseOptions: {
    stripRegexp: /[^A-Z0-9.-]+/gi,
  },
  ignoreHeaders: true,
};