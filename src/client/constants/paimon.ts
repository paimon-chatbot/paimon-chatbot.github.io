import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['help'],
  category: 'UTILITY',
  description: '',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['weapon'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a game weapon from Genshin Impact',
  examples: ['weapon <weapon name>', 'weapon <category>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our weapon gallery`,
    `Tips:\n` + 
    `You can just write short name of the weapon like \`${prefix}weapon gravestone\` will result <Wolf's Gravestone>\n` +
    `You can write initial name of weapon for easy calling like \`${prefix}weapon vv\` will result <Vortex Vanquisher>\n` +
    `This command has shortform \`${prefix}w\` for easier access`
  ]
}, {
  commands: ['art', 'artifact'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a stigmata\'s effect from Hokai Impact 3rd',
  examples: ['artifact <artifact name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our artifact gallery`,
    `Tips:\n` +
    `You don't need to write full name of artifact, for example \`${prefix}artifact thunder\` will show you result of all artifact with your query\n` +
    `You can tap emoji to jump to a detailed version of an artifact set\n` +
    `This command has shortform \`${prefix}a\` for easier access`
  ]
}, {
  commands: ['char', 'character'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a character',
  examples: ['character <character name>', 'character <element name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `You can tap emoji to jump to talent, constellation, ascension or statistic section of a character\n` +
    `This command has shortform \`${prefix}c\` for easier access`
  ]
}, {
  commands: ['talent'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a character\'s talent',
  examples: ['talent <character name>', 'talent <element name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `You can tap emoji to jump to detail, constellation, ascension or statistic section of a character`
  ]
}, {
  commands: ['cons', 'constellation'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a character\'s constellation',
  examples: ['constellation <character name>', 'constellation <element name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `You can tap emoji to jump to detail, talent, ascension or statistic section of a character`
  ]
}, {
  commands: ['asc', 'ascension'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a character\'s ascension requirements',
  examples: ['ascension <character name>', 'ascension <element name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `You can tap emoji to jump to detail, talent, constellation or statistic section of a character`
  ]
}, {
  commands: ['stat', 'statistic'],
  category: 'GENSHIN IMPACT',
  description: 'Show you detail about a character\'s status progressions',
  examples: ['statistic <character name>', 'statistic <element name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `You can tap emoji to jump to detail, talent, constellation or ascension section of a character`
  ]
}]