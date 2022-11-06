import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DEFAULT_CONFIGURATION } from '@github-commits-history/configuration'
import { Search } from '../../components/search/search';
import { Footer } from '../../components/footer/footer';
import { Commits } from '../../components/commits/commits';
import { Commit } from '@github-commits-history/github/interfaces'
import { ApiService } from '../../api/api.service';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ToggleButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ErrorsDialog } from '../../config/errors';

const RESULTS_PER_PAGE = 5

const theme = createTheme();

export function Home() {
  const [username, setUsername] = useState(DEFAULT_CONFIGURATION.repository.owner)
  const [repository, setRepository] = useState(DEFAULT_CONFIGURATION.repository.repository)
  const [commits, setCommits] = useState<Commit[]>([])
  const [page, setPage] = useState<number>(0)

  const [open, setOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleClose = (value: string) => {
    setOpen(false);
  };

  async function getCommits() {
    try {
      const commits = await ApiService.getCommits({
        owner: username,
        repository,
        page,
        per_page: RESULTS_PER_PAGE
      })
      setCommits(commits)
    } catch (e: any) {
      const errorMsg = ErrorsDialog[e.response.status]
      if (!errorMsg) {
        return
      } 
      setErrorTitle(errorMsg.title)
      setErrorMessage(errorMsg.message)
      setOpen(true)
    }
  }

  useEffect(() => {
    getCommits()
  }, [])

  useEffect(() => {
    getCommits()
  }, [username, repository])

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {errorTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose as any} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar>
            <GitHubIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Github repository commit history
          </Typography>
          <Search setUsername={setUsername} setRepository={setRepository} />
        </Box>
        <Commits commits={commits} />

        <ToggleButton value="left" aria-label="left aligned">
          <ArrowBackIosIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <ArrowForwardIosIcon />
        </ToggleButton>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}