import { Commit } from "@github-commits-history/github/interfaces"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { timeAgoFormat } from "../../utils/date.util";

type CommitsProps = {
  commits: Commit[]
}

export function Commits(props: CommitsProps) {
  return (
    <>
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
            {props.commits.map((commit) => (
              <TableRow
                key={commit.sha}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{timeAgoFormat(commit.commit.author?.date)}</TableCell>
                <TableCell>{commit.commit.message}</TableCell>
                <TableCell>{commit.commit.author?.name}</TableCell>
                <TableCell>{commit.sha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
