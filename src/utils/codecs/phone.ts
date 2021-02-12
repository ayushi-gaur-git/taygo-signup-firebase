import * as t from "io-ts";

export const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const isPhone = (input: unknown): input is string => typeof input === "string" && PHONE_REGEX.test(input);

const requirePhone = (input: unknown): input is string => input != "";

const PhoneCodec = new t.Type<string, string, unknown>(
  "phone",
  (input: unknown): input is string => isPhone(input),
  (input, context) =>
    requirePhone(input)
      ? isPhone(input)
        ? t.success(input)
        : t.failure(input, context, "Invalid Phone Number")
      : t.failure(input, context, "Phone Number is required"),
  t.identity
);

export const phoneCodec = t.type({
  phone: PhoneCodec
})
