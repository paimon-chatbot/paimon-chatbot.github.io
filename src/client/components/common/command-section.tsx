import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import {ExpandMore as ExpandMoreIcon, Search as SearchIcon} from '@material-ui/icons'

import {conjuctJoin} from '../../utility/string'
import {Help} from '../../constants'

const useStyles = makeStyles((theme:Theme) => ({
  searchCardSection: {
    margin: '16px 0 24px'
  },
  searchCard: {
    borderRadius: '8px',
    transition: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  searchCardContent: {
    '&:first-child': {
      paddingRight: '8px',
      paddingTop: '8px',
      paddingBottom: '8px'
    }
  },
  commandSection: {
    width: '100%',
    padding: '32px 0 64px'
  },
  commandCategory: {
    margin: '16px 0'
  },
  commandPanel: {
    background: theme.palette.background.paper,
    transition: [
      'margin 150ms',
      'border-radius 300ms'
    ].map(style =>
      `${style} cubic-bezier(0.4, 0, 0.2, 1) 0ms`
    ).join(', '),
    '&:before': {
      height: 0
    },
    '&:first-child': {
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    },
    '&:last-child': {
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px'
    },
    '&.Mui-expanded': {
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px'
    }
  },
  commandPanelContent: {
    position: 'relative',
    '&.Mui-expanded $commandPanelHeaderBackground': {
      backgroundColor: 'rgb(203, 197, 183)'
    }
  },
  commandPanelHeaderBackground: {
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(203, 197, 183)',
    backgroundColor: 'transparent',
    transition: [
      'border-color 150ms',
      'background-color 300ms'
    ].map(style =>
      `${style} cubic-bezier(0.4, 0, 0.2, 1) 0ms`
    ).join(', ')
  },
  commandTitleContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100,
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  commandTitle: {
    flexBasis: '50%',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexBasis: 'auto'
    }
  },
  commandDetailContainer: {
    position: 'relative',
    zIndex: 100
  },
  commandPanelDetailBackground: {
    position: 'absolute',
    top: '0',
    left: '4px',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 6px)',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(203, 197, 183)'
  },
  commandSubheading: {
    marginTop: '12px'
  },
  commandExamplePre: {
    fontFamily: 'Roboto Mono',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  commandDetail: {
    flexDirection: 'column'
  },
  commandDetailParagraph: {
    wordBreak: 'break-word'
  },
  commandExpandPlaceholder: {
    height:'24px',
    width:'24px'
  }
}))
let input:HTMLInputElement
let updateHeightTimeout:NodeJS.Timeout | number
const CommandSection:React.FunctionComponent<CommandSectionProps> = (props) => {
  const [state, setState] = React.useState<CommandSectionState>({
    query: undefined,
    seaching: false,
    active: undefined
  })

  const expand = (key:string) => {
    if(state.active === key) {
      setState({
        ...state,
        active: undefined
      })
    } else {
      setState({
        ...state,
        active: key
      })
    }
  }
  const searchQuery = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setState({
      ...state,
      query:value === ''? undefined:value.toLowerCase()
    })
  }
  const focusInput = () => {
    input?.focus()
  }
  const onFocusInput = (focus:boolean) => {
    setState({
      ...state,
      seaching: focus
    })
  }
  const prefix = (command:string, mentionOnly:boolean) => {
    const {name} = props
    if(mentionOnly) {
      return `@${name} ${command}`
    } else {
      return `${PREFIX}${command}`
    }
  }
  
  const classes = useStyles({})
  const {helps} = props
  const {query, seaching, active} = state
  const highlightQuery = (paragraph:string) => {
    const regexp = query && new RegExp(query.split('').map(char =>
      /\W/.test(char)? `\\${char}`:char
    ).join(''), 'gi')
    const found = paragraph.match(regexp)
    return paragraph.split(regexp).reduce((content, notQuery, index) => 
      index === 0? [
        notQuery
      ]:[
        ...content,
        <span key={index} style={{backgroundColor:'rgb(203, 197, 183)'}}>{found[index - 1]}</span>,
        notQuery
      ]
    , [])
  }
  return (
    <div className={classes.commandSection}>
      <div className={classes.searchCardSection}>
        <Card className={classes.searchCard} elevation={seaching? 8:2}>
          <CardContent className={classes.searchCardContent}>
            <Input inputRef={ref => input = ref} fullWidth disableUnderline
              onChange={searchQuery}
              value={query || ''}
              onFocus={() => onFocusInput(true)}
              onBlur={() => onFocusInput(false)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={focusInput}><SearchIcon/></IconButton>
                </InputAdornment>
              }
            />
          </CardContent>
        </Card>
      </div>
      {helps.reduce<{category:string, helps:Help[]}[]>((category, help) => 
        !query || help.commands.some(command => command.includes(query)) || help.category.includes(query.toUpperCase())? [
          ...category.map(each =>
            each.category === help.category?
            {category:each.category, helps:[...each.helps, help]}:
            each
          ),
          ...!category.map(each => each.category).includes(help.category)?
          [{category:help.category, helps:[help]}]:
          []
        ]:category,
      []).map((each) =>
        <div key={each.category} className={classes.commandCategory}>
          {each.helps.map((help) =>
            <Accordion disabled={help.description === ''}
              key={help.commands[0]}
              expanded={help.commands[0] === active}
              onChange={() => expand(help.commands[0])}
              classes={{root:classes.commandPanel}}
            >
              <AccordionSummary
                className={classes.commandPanelContent}
                expandIcon={help.description !== ''
                  ? <ExpandMoreIcon/>
                  : <div className={classes.commandExpandPlaceholder}/>
                }
              >
                <div className={classes.commandTitleContainer}>
                  <div className={classes.commandTitle}>
                    <Typography variant='subtitle1'>
                      {highlightQuery(conjuctJoin(help.commands.map(command => prefix(command, help.mentionOnly))))}
                    </Typography>
                  </div>
                  <div className={classes.commandTitle}>
                    <Typography variant='caption'>{highlightQuery(help.category)}</Typography>
                  </div>
                </div>
                <div className={classes.commandPanelHeaderBackground}/>
              </AccordionSummary>
              <AccordionDetails className={[classes.commandDetail, classes.commandPanelContent].join(' ')}>
                <div className={classes.commandDetailContainer}>
                  <Typography variant='caption'>Description</Typography>
                  <Typography className={classes.commandDetailParagraph} component='p'>
                    {help.description}
                  </Typography>
                  {help.examples.length > 0 && <Typography className={classes.commandSubheading} variant='caption'>Examples</Typography>}
                  {help.examples.map((example, index) =>
                    <Typography key={index} className={classes.commandExamplePre} component='pre' gutterBottom>
                      {prefix(example, help.mentionOnly)}
                    </Typography>
                  )}
                  {help.notes.length > 0 && <Typography className={classes.commandSubheading} variant='caption'>Notes</Typography>}
                  {help.notes.map((note, index) =>
                    <Typography key={index} variant='body1' gutterBottom>
                      {note.split('\n').map((line, index) => [
                        index !== 0? <br key={index}/>:undefined,
                        line,
                      ])}
                    </Typography>
                  )}
                </div>
                <div className={classes.commandPanelDetailBackground}/>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      )}
    </div>
  )
}
type CommandSectionProps = {
  name: string
  helps: Help[]
}
type CommandSectionState = {
  query: string
  seaching?: boolean
  active: string
}

export default CommandSection