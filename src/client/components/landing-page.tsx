import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import LeftOrnament from '../../asset/img/left-ornament.svg'
import LyneyDemo from '../../asset/img/demo/lyney.png'
import FirstGreatMagicDemo from '../../asset/img/demo/the-first-great-magic.png'
import SlashCommandDemo from '../../asset/img/demo/slash-command.png'
import CharacterDemo from '../../asset/img/demo/character.png'
import WeaponDemo from '../../asset/img/demo/weapon.png'
import ArtifactDemo from '../../asset/img/demo/artifact.png'
import generateHelps from '../constants/paimon'
import Header from './common/header'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'

const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Roboto)'
  ] as any,
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  descriptionRow: {
    textAlign: 'center',
    paddingTop: '32px',
    paddingBottom: '16px'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  inviteButtons: {
    textAlign: 'center',
    paddingTop: '16px',
    paddingBottom: '32px'
  },
  inviteButton: {
    margin: '8px',
    padding: '8px 32px',
    borderRadius: '21px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  dividerTextOrnament: {
    width: '157px',
    margin: '0 16px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '120px'
    }
  },
  dividerTextOrnamentRight: {
    transform: 'scaleX(-1)',
  },
  footer: {
    width: '100vw',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(61, 65, 86)'
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Header/>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container justify='center' classes={{container:classes.descriptionRow}}>
          <Typography color='textPrimary' variant='body1'>
            Paimon is our bot designed to provide information of in game equipments to discord.
          </Typography>
        </Grid>
        <Grid container justify='center' classes={{container:classes.inviteButtons}}>
          <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
            href='https://discord.com/oauth2/authorize?client_id=787714261576318976&scope=bot%20applications.commands&permissions=8'
          >
            INVITE ME
          </Button>
        </Grid>
        <Grid container classes={{container:classes.dividerRow}}>
          <img className={classes.dividerTextOrnament} src={LeftOrnament}/>
          <Typography color='textPrimary' variant='h5'>
            NEW IN SEPTEMBER
          </Typography>
          <img className={[classes.dividerTextOrnament, classes.dividerTextOrnamentRight].join(' ')} src={LeftOrnament}/>
        </Grid>
        <DemoSection
          demos={[{
            headline: 'Lyney',
            command: `command: ${PREFIX}character`,
            description: [
              'The newest characters are added!',
              'Check out Lyney on our Paimon bot!'
            ],
            image: LyneyDemo,
          }, {
            headline: 'The First Great Magic',
            command: `command: ${PREFIX}weapon`,
            description: [
              'The newest weapons are added!',
              'Check out the first great magic!'
            ],
            image: FirstGreatMagicDemo,
          }, {
            headline: 'Slash Command',
            command: ``,
            description: [
              "Paimon can't read all messages sent due to privacy issue and missed out commands",
              'Hence we taught Paimon how to use the new slash commands'
            ],
            image: SlashCommandDemo
          }]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <img className={classes.dividerTextOrnament} src={LeftOrnament}/>
          <Typography color='textPrimary' variant='h5'>
            FEATURES
          </Typography>
          <img className={[classes.dividerTextOrnament, classes.dividerTextOrnamentRight].join(' ')} src={LeftOrnament}/>
        </Grid>
        <DemoSection
          demos={[{
            headline: 'Show & Describe Character',
            command: `command: ${PREFIX}character`,
            description: [
              'You don\'t have to open the game to learn more about other characters.'
            ],
            image: CharacterDemo
          }, {
            headline: 'Show & Describe Weapon',
            command: `command: ${PREFIX}weapon`,
            description: [
              'You don\'t need to take screenshot and upload it to show info about weapon.',
              'Paimon will display it for you.'
            ],
            image: WeaponDemo
          }, {
            headline: 'Show & Describe Artifact',
            command: `command: ${PREFIX}artifact`,
            description: [
              'Same goes to artifacts too...',
              'Info displayed will be catered to both dark and light theme.'
            ],
            image: ArtifactDemo
          }]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <img className={classes.dividerTextOrnament} src={LeftOrnament}/>
          <Typography color='textPrimary' variant='h5'>
            COMMANDS
          </Typography>
          <img className={[classes.dividerTextOrnament, classes.dividerTextOrnamentRight].join(' ')} src={LeftOrnament}/>
        </Grid>
        <CommandSection
          name='Paimon'
          helps={generateHelps(PREFIX)}
        />
      </Grid>
      <div className={classes.footer}>
        <Grid container justify='space-between' alignItems='center' classes={{container:classes.pageContainer}}>
          <Typography color='textSecondary' variant='caption'>
            Developed by: Ching Yaw Hao, Lil'Cookie, Melvin Marzuki
          </Typography>
          <Typography color='textSecondary' variant='caption'>
            <a className={classes.link} href='https://discord.gg/cWbWNuy'>Try It</a> | <a className={classes.link} href='https://www.patreon.com/user?u=10662508'>Support Us</a> 
          </Typography>
        </Grid>
      </div>
    </div>
  )
}

export default LandingPage