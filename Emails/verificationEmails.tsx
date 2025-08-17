import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  userName: string;
  otp: string;
}

export function VerificationEmail({ userName, otp }: VerificationEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>Email Verification</title>
      </Head>
      <Preview>Here&apos;s your verification code {otp}</Preview>
      <Section>
        <Row>
          <Heading>Hello {userName}</Heading>
        </Row>
        <Row>
          <Text>
            Thank You for registering. please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
      </Section>
    </Html>
  );
}

export default VerificationEmail;
