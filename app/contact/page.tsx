import { Icon } from "@iconify/react";
import { Title, Group, Text, Card, Paper, Stack, NavLink, Box } from "@mantine/core";

import ContactForm from "./ContactForm";
import classes from "./styles.module.scss";
import mkMetaData from "#/lib/utils/mkMetaData";
import waves from "#a/images/waves.svg";
import contacts from "./contacts.json";

export const metadata = mkMetaData({
  title: "Contact | Hima Pro",
  description: "I'm looking forward to hearing from you.",
});

const page = () => {
  return (
    <>
      <Title component={Group} order={1} my={0}>
        <Icon icon="ph:envelope-simple-duotone" />
        Contact Me
      </Title>
      <Text c="dimmed" size="lg">
        I'm looking forward to hearing from you.
      </Text>
      <Box className={classes.contactContainer}>
        <Card className={classes.contact} withBorder shadow="sm" p={20} mt={15}>
          <Paper className={classes.links} bg={`url(${waves.src}) no-repeat`}>
            <h2>Contact Details :</h2>
            <Stack>
              {contacts.map(({ label, href, icon }, index) => (
                <NavLink {...{ label, href }} leftSection={<Icon icon={icon} />} target="_blank" key={index} />
              ))}
            </Stack>
          </Paper>
          <ContactForm />
        </Card>
      </Box>
    </>
  );
};

export default page;
