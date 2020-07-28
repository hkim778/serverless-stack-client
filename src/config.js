export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-hj",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6ou9ihsn78.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_P5pN2d7kS",
    APP_CLIENT_ID: "4bslg9rnuoi3nqq55lrietk8mg",
    IDENTITY_POOL_ID: "us-east-1:e4f3a0f0-da99-4a4a-a9da-693bbdb134a8",
  },
};
