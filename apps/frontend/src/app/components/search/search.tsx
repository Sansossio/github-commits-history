import { useCallback } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DEFAULT_CONFIGURATION } from '@github-commits-history/configuration'
import { Avatar, Container, CssBaseline, Typography } from '@mui/material';
import { GetCommits } from '@github-commits-history/github/interfaces';
import { createSearchParams, useNavigate } from 'react-router-dom';

type SearchProps = {
  owner?: string
  repository?: string
}

export function Search(props: SearchProps) {
  const navigate = useNavigate()

  const handleChange = useCallback((data: GetCommits) => {
    navigate({
      pathname: '/commits',
      search: `?${createSearchParams(data as any)}`
    })
  }, [navigate])

  const [owner, setOwner] = React.useState(props.owner?? DEFAULT_CONFIGURATION.repository.owner)
  const [repository, setRepository] = React.useState(props.repository ?? DEFAULT_CONFIGURATION.repository.repository)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChange({ owner, repository, page: 1 })
  };

  return (
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
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            id="username"
            label="Github username"
            name="username"
            defaultValue={owner}
            onChange={e => setOwner(e.target.value)}
            fullWidth
            maxRows={4}
            autoFocus
          />

          <TextField
            margin="normal"
            required
            id="username"
            label="Repository name"
            name="repository"
            defaultValue={repository}
            onChange={e => setRepository(e.target.value)}
            fullWidth
            maxRows={4}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Search commits
          </Button>
        </Box>
      </Box>
    </Container>
  );
}