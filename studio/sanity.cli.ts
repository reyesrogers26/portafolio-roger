import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 's0278vrb',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME || 'roger-portafolio',
  deployment: {
    appId: 'hlwwmh6p6h3ez7uj9lqmolfq',
  },
})