import * as t from "io-ts";

export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;

const isPassword = (input: unknown): input is string => typeof input === "string" && PASSWORD_REGEX.test(input);

const requirePassword = (input: unknown): input is string => input != "";

const PasswordCodec = new t.Type<string, string, unknown>(
  "password",
  (input: unknown): input is string => isPassword(input),
  (input, context) =>
    requirePassword(input)
      ? isPassword(input)
        ? t.success(input)
        : t.failure(input, context, "Invalid Password")
      : t.failure(input, context, "Password is required"),
  t.identity
);

export const passwordCodec = t.type({
  password: PasswordCodec
})
