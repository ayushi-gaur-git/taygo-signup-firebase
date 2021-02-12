import * as t from 'io-ts';

const isName = (input: unknown): input is string => typeof input === "string";

const requireName = (input: unknown): input is string => input != "";

const NameCodec = new t.Type<string, string, unknown>(
  "name",
  (input: unknown): input is string => isName(input),
  (input, context) =>
    requireName(input)
     ? isName(input)
      ? t.success(input)
      : t.failure(input, context, "Name is not Valid")
     : t.failure(input, context, "Name is required"),
  t.identity
);

export const nameCodec = t.type({
  name: NameCodec
})
