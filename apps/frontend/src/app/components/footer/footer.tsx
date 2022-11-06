import { Link, Typography } from "@mui/material";

export function Footer(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Made by '}
      <Link color="inherit" href="https://github.com/Sansossio/github-commits-history" target="_blank">
        Julio Sansossio
      </Link>
    </Typography>
  );
}
