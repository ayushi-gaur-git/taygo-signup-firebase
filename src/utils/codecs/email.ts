// ----------------------------------------------------------------------------
// IMPORTS

// codecs
import * as t from "io-ts";

// Regular regex for email validation
export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// validating if input is not empty and is a valid email
const isEmail = (input: unknown): input is string => typeof input === "string" && EMAIL_REGEX.test(input);

// validating if input is not empty
const requireEmail = (input: unknown): input is string => input != "";

const EmailCodec = new t.Type<string, string, unknown>( // type, output type, input type
  "email", // name of your validation type, used to find during debugging
  (input: unknown): input is string => isEmail(input), // type-guard; not used
  (input, context) => // decoding function where you have to write your validation logic
    requireEmail(input)
      ? isEmail(input)
        ? t.success(input)
        : t.failure(input, context, "Email is not a valid email")
      : t.failure(input, context, "Email is required"),
  t.identity // encoding fucntion; not used
);

export const signupCodec = t.type({
  email: EmailCodec
});
