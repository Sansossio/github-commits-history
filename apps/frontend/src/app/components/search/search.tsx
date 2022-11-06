import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DEFAULT_CONFIGURATION } from '@github-commits-history/configuration'

const theme = createTheme();

type SearchProps = {
  setUsername: Function
  setRepository: Function
}

export function Search(props: SearchProps) {
  const [username, setUsername] = React.useState(DEFAULT_CONFIGURATION.repository.owner)
  const [repository, setRepository] = React.useState(DEFAULT_CONFIGURATION.repository.repository)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setUsername(username)
    props.setRepository(repository)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        required
        id="username"
        label="Github username"
        name="username"
        defaultValue={username}
        onChange={e => setUsername(e.target.value)}
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
  );
}