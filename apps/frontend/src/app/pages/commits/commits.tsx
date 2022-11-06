import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Search } from '../../components/search/search';
import { Footer } from '../../components/footer/footer';
import { CommitComponent } from '../../components/commit/commit';
import { Commit } from '@github-commits-history/github/interfaces'
import { ApiService } from '../../api/api.service';
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ToggleButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ErrorsDialog } from '../../config/errors';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

import './commits.scss'
import { useCallback } from 'react';

const RESULTS_PER_PAGE = 10

const theme = createTheme();

export function CommitsPage() {
  const navigate = useNavigate()
  const [queryParams] = useSearchParams()

  const [commits, setCommits] = useState<Commit[]>([])

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorTitle, setErrorTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [
    owner,
    repository,
    page
  ] = [
      queryParams.get('owner'),
      queryParams.get('repository'),
      +(queryParams.get('page') as string)
    ]

    const getCommits = useCallback(async () => {
      try {
        setLoading(true)
        const commits = await ApiService.getCommits({
          owner: owner as string,
          repository: repository as string,
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
      } finally {
        setLoading(false)
      }
    }, [owner, repository, page])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCommits([])
    getCommits()
  }, [owner, repository, page, getCommits])

  const handleChangePage = (page: number) => {
    const nvObj: any = {
      owner,
      repository,
      page
    }
    navigate({
      pathname: '/commits',
      search: `?${createSearchParams(nvObj)}`
    })
  }

  if (!page || page < 1) {
    handleChangePage(1)
    return null
  }

  const handleClose = () => setOpen(false);

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
        <Search />
        {loading && <CircularProgress />}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Sha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {commits.map((commit) => <CommitComponent key={`commit-${commit.sha}`} commit={commit} />)}
            </TableBody>
          </Table>
        </TableContainer>

        <ToggleButton value="left" aria-label="left aligned" onClick={() => handleChangePage(page - 1)} disabled={page <= 1}>
          <ArrowBackIosIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" onClick={() => handleChangePage(page + 1)} disabled={commits.length < RESULTS_PER_PAGE}>
          <ArrowForwardIosIcon />
        </ToggleButton>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}