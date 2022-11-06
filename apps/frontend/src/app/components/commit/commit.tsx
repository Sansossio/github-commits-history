import { Commit } from "@github-commits-history/github/interfaces"
import { TableRow } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import { useCallback } from "react";
import { timeAgoFormat } from "../../utils/date.util";

export function CommitComponent({ commit }: { commit: Commit }) {
  const handleClick = useCallback(() => {
    window.open(commit.html_url, '_blank')
  }, [])

  return (
    <>
      <TableRow
        key={commit.sha}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        className="commit-row"
        onClick={() => handleClick()}
      >
        <TableCell>{timeAgoFormat(commit.commit.author?.date)}</TableCell>
        <TableCell>{commit.commit.message}</TableCell>
        <TableCell>{commit.commit.author?.name}</TableCell>
        <TableCell>{commit.sha}</TableCell>
      </TableRow>
    </>
  )
}
