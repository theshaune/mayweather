import path from 'path'
import { find, sample, random, size } from 'lodash'

// Convert urls to consistant slugs
const slugify = text => {
  if (text === undefined) {
    return 'undefined'
  }
  return text
    .replace(/[\s]/g, '-')
    .replace(/[']/g, '')
    .replace(/[‘’]/g, '')
    .replace(/[,]/g, '')
    .replace(/-{2,}/g, '-')
    .toLowerCase()
}

export const phraseFloyd = [
  'Floyd ‘Money’ Mayweather',
  'the best boxer in the world',
  'gunna beat you and make you call me pretty',
  'a motherfuckin’ millionaire',
  'worth more than you',
  'just getting started',
  'on the money team',
  'speaking to god right now',
  'the lavish king living down here on Earth',
  'predestined to win',
  'startin’ from the bottom',
  'gods gift',
  'the greatest boxer of all time',
  'making a shit ton of money',
  'the champion',
  'the money king',
  'my own boss',
  'looking for a guy to shut me up',
  'not waiting for nobody',
  'the best at talkin’ trash, but I can back it up'
]

export const adjectiveFloyd = [
  'a desperate',
  'a sad',
  'a desperate',
  'a sad',
  'a goddamn',
  'a damn',
  'a motherfuckin’',
  'a disrespectful',
  'a pretty',
  'a weak',
  'a pussy',
  'a fishnet-wearing',
  'a massage-givin’',
  'a bad',
  'a pussy-ass',
  'a shitty',
  'a poor',
  'an unworthy',
  'a has-been',
  'a rookie',
  'a shit talkin’',
  'a short'
]

export const nounFloyd = [
  'bitch',
  'ass',
  'pussy',
  'fighter',
  'asshole',
  'loser',
  'terrible athlete',
  'C-class fighter',
  'amateur',
  'piece of shit',
  'rat',
  'kid',
  'old man',
  'punk',
  'punk-bitch',
  'sore-ass loser',
  'broke motherfucker',
  'shithead',
  'failure',
  'non-boxer'
]

export const verbFloyd = [
  'kick',
  'punch',
  'stomp',
  'roundhouse',
  'break',
  'spank',
  'smack',
  'strangle',
  'kiss',
  'slap',
  'bite',
  'tickle',
  'knock out',
  'stroke',
  'pound',
  'strike',
  'hook',
  'destroy',
  'bounce'
]

export const descriptiveFloyd = [
  'stupid face',
  'spirit',
  'face',
  'ass',
  'teeth',
  'butt',
  'fingers',
  'toes',
  'nose',
  'knees',
  'hair',
  'eyes',
  'dreams',
  'mouth',
  'tiny hands',
  'skull',
  'bones',
  'life',
  'small head'
]

export const imageFloyd = ['floydHat', 'floydHappy']

// Conor
export const phraseConor = [
  'your daddy',
  'the king',
  'the greatest fighter who ever lived',
  'the IRS coming to tax your arse',
  'a real man',
  'the champion',
  'the toughest',
  'a powerful man',
  'consistently knocking men unconscious',
  'mystic mac',
  'cashing checks heavier than you',
  'Irish baby',
  'the ring master',
  'your worst nightmare',
  'gonna KO you in one round',
  'the most active fighter in the game',
  'a fighter, not a boxer',
  'a money maker',
  'running this city'
]

const adjectiveConor = [
  'a feckin',
  'a poor',
  'a boggin',
  'a sick',
  'a hideous',
  'a broke',
  'an awful',
  'a terrible',
  'a shite',
  'a short',
  'a frail',
  'a tiny',
  'a stupid',
  'an annoying',
  'an ugly',
  'a fake',
  'a fat',
  'a piss-weak',
  'a quiet little'
]

export const nounConor = [
  'boyo',
  'bastard',
  'fella',
  'wanker',
  'twat',
  'arse',
  'bum',
  'kid',
  'failure',
  'has-been',
  'steriod-head',
  'gobshite',
  'nobody',
  'breakdancer bitch',
  'piss taker',
  'Hans Moleman',
  'yank',
  'tit'
]

export const verbConor = [
  'kick',
  'punch',
  'stomp',
  'roundhouse',
  'break',
  'spank',
  'smack',
  'strangle',
  'kiss',
  'slap',
  'bite',
  'tickle',
  'knock out',
  'stroke',
  'pound',
  'strike',
  'hook',
  'destroy',
  'bounce'
]

export const descriptiveConor = [
  'brittle bitch hands',
  'spirit',
  'face',
  'arse',
  'teeth',
  'bum',
  'fingers',
  'toes',
  'nose',
  'knees',
  'hair',
  'eyes',
  'dreams',
  'mouth',
  'weak little face',
  'skull',
  'bones',
  'self esteem',
  'gabber'
]

export const imageConor = ['conorHappy', 'conorStare']

export const conor = {
  name: 'Conor',
  phrase: phraseConor,
  adjective: adjectiveConor,
  noun: nounConor,
  verb: verbConor,
  descriptive: descriptiveConor,
  image: imageConor
}

export const floyd = {
  name: 'Floyd',
  phrase: phraseFloyd,
  adjective: adjectiveFloyd,
  noun: nounFloyd,
  verb: verbFloyd,
  descriptive: descriptiveFloyd,
  image: imageFloyd
}

export const fighters = { conor, floyd }

// This should probly be in a utility
export const generateMeme = () => {
  const fighter = sample(fighters)
  const name = fighter.name
  const phrase = sample(fighter.phrase)
  const adjective = sample(fighter.adjective)
  const noun = sample(fighter.noun)
  const verb = sample(fighter.verb)
  const descriptive = sample(fighter.descriptive)
  const image = sample(fighter.image)
  const url = path.join(
    '/',
    slugify(name),
    slugify(phrase),
    slugify(adjective),
    slugify(noun),
    slugify(verb),
    slugify(descriptive)
  )

  return {
    name,
    phrase,
    adjective,
    noun,
    verb,
    descriptive,
    image,
    url
  }
}

export const parseMeme = query => {
  // Terrible error handling. Time got the better of me.
  if (!query.name) {
    return null
  }

  const url = query.url
  const fighter = fighters[slugify(query.name)]

  // Terrible error handling. Time got the better of me.
  if (!fighter) {
    return null
  }

  const raw = {
    name: fighter.name,
    image: sample(fighter.image),
    phrase: find(fighter.phrase, a => slugify(a) === slugify(query.phrase)),
    adjective: find(
      fighter.adjective,
      a => slugify(a) === slugify(query.adjective)
    ),
    noun: find(fighter.noun, a => slugify(a) === slugify(query.noun)),
    verb: find(fighter.verb, a => slugify(a) === slugify(query.verb)),
    descriptive: find(
      fighter.descriptive,
      a => slugify(a) === slugify(query.descriptive)
    )
  }

  const sentence = `I am ${raw.phrase}, you're ${raw.adjective} ${raw.noun} and i'm going to ${raw.verb} your ${raw.descriptive}`

  return { raw, sentence, url }
}
