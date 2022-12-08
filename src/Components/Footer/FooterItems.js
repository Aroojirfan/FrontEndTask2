import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
const FooterItems = () => {
  const footerLinks = [
    { id: 1, name: ["FAQ", "Privacy", "interest", "Investor Relations"] },
    {
      id: 2,
      name: ["Help Center", " Jobs", "Cookie Preferences", "Legal Notices"],
    },
    {
      id: 3,
      name: ["Account", "Ways to Watch", "Only on TV", "Investor Relations"],
    },
    { id: 4, name: ["Contact", "Terms of Use", "Media Center", "Contact"] },
  ];
  return (
    <div>
      {footerLinks?.map(({ id, name }) => (
        <Grid data-testid={`footer-item-${id}`} key={id} container spacing={7}>
          {name?.map((name) => (
            <Grid data-testid={`footerlink-item-${id}`} data item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="caption" component="a" href="#">
                  {name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default FooterItems;
