// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import insights from './insights'
import services_taxation from './services-taxation'
import services_accounting from './services-accounting'
import services_assurance from './services-assurance.js'
import services_consulting from './services-consulting.js'
import case_study from './case-study.js'
import profit from './profit.js'
import team from './team.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    insights,
    services_taxation,
    services_accounting,
    services_assurance,
    services_consulting,
    case_study,
    profit,
    team

  ]),
})
