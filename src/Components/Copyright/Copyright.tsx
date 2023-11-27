import * as React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface Props {
  companyName: string
}

const Copyright: React.FC<Props> = ({companyName}) => {
  return (
    <Typography variant="body2" color="#000000" align="center" >
      {"Copyright © "}
      <Link color="#000000" href="https://mui.com/">
        {companyName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
