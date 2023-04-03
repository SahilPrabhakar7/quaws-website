import { environment } from "../environments/environment";
const appConfig = {
  // apiUrl: environment.apiUrl,
  basicAuthKey: "Basic Z3JlZW5hcnRoYXBwOjEyMzQkI0Ah",
  EMAIL_REGEX: "^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,})$",
  ALPHANUMERIC_REGEX: "^[a-zA-Z0-9 ]+(([a-zA-Z0-9])?[a-zA-Z0-9])$",
  ZIPCODE_REGEX: "^(\d{5})([- ])?(\d{4})?$",
  PAN_REGEX: /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
  GST_REGEX: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",
  ROLE_BUYER: "BUYER",
  ROLE_SELLER: "SELLER",
  ROLE_ADMIN: "ADMIN",
  AWS_ACCESSKEY:'AKIAXIH5XJ6QGQWTXSF3',
  AWS_SECRETKEY:'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',
  AWS_REGION:'us-east-2'
};
export const FileFormat = {
  image: ".jpeg, .jpg, .png",
  report: ".doc, .docx, .pdf, .csv, .xls, .xlsx, .jpeg, .jpg, .png",
  document: ".doc, .docx, .pdf, .jpeg, .jpg, .png",
  video: ".mkv, .mp4",
  sign: ".png"
}
export default appConfig;
