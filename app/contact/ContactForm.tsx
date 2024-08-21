"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { TextInput, Textarea, Button, Stack, LoadingOverlay, Box } from "@mantine/core";
import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";
import zod from "zod";

import { sendTG } from "#/lib/actions/sendTG";
import Notify from "#h/Notify";

const ContactForm = () => {
  const [visible, setVisible] = useState(false);

  const Form = useForm({
    initialValues: { name: "", email: "", msg: "" },
    validate: zodResolver(
      zod.object({
        name: zod.string().min(3, "Name must be at least 3 characters"),
        email: zod.string().email("Invalid email").min(6, "Email must be at least 6 characters"),
        msg: zod.string().min(10, "Message must be at least 10 characters"),
      })
    ),
  });

  const handleSubmit = (data: any) => {
    setVisible(true);
    try {
      sendTG(data).then((e: any) => {
        setVisible(false);
        if (e?.ok) {
          Form.reset();
          Notify({ title: "Success", message: "Message sent successfully !", icon: "tabler:check" });
        } else {
          Notify({ title: "Something went wrong", message: "Couldn't send the message !", icon: "tabler:cancel" });
        }
      });
    } catch (error) {
      Notify({ title: "Something went wrong", message: "Couldn't send the message !", icon: "tabler:cancel" });
      console.error(error);
      setVisible(false);
    }
  };

  return (
    <Box component="form" onSubmit={Form.onSubmit(handleSubmit)} pos="relative" p={20}>
      <h2>Contact Form :</h2>
      <Stack>
        <TextInput
          label="Name"
          variant="filled"
          placeholder="ex: Mohamed"
          {...Form.getInputProps("name")}
          withAsterisk
        />
        <TextInput
          label="Email"
          variant="filled"
          placeholder="ex: user@domain.tld"
          {...Form.getInputProps("email")}
          withAsterisk
        />
        <Textarea
          label="Message"
          variant="filled"
          placeholder="Think about it (^_^)"
          {...Form.getInputProps("msg")}
          withAsterisk
          rows={5}
        />
        <Button loading={visible} h="40px" w="120px" type="submit" rightSection={<Icon icon="tabler:send-2" />}>
          Send
        </Button>
      </Stack>
      <LoadingOverlay visible={visible} />
    </Box>
  );
};

export default ContactForm;
