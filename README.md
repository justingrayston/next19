# Next 19 Function Framework Demo

This repo was used for the demo for the "Cloud Functions Everywhere" talk
at Google Cloud Next San Francisco 2019 conference.

## The extra bit

In the demo we covered building a docker image on your
local machine. However, you can use Cloud Build to automate deploys.

We thought it was better to see it manually deployed to show how consistant a developer experience it was.
However included in this repo is a cloudbuild.yaml file. This does exactly the same thing, sends the same function to GCF, Cloud Run and Cloud Run on GKE from one push to master.

## The IAM prerequisites

As you are deploying from Cloud Build, the Cloud Build service account needs to be able to "act as" another service account to deploy into CLOUD RUN on GKE. So to do that you need to run the following commands so that the Cloud Build Service account can actually deploy. (Replace values between [] with info from the IAM section in the Console).

For Cloud Build to act as the default App Engine Service Account.

`gcloud iam service-accounts add-iam-policy-binding [project-id]@appspot.gserviceaccount.com --member=[xxxxxxxx]@cloudbuild.gserviceaccount.com --role=roles/iam.serviceAccountUser`

For Cloud Build to act as the compute service account.

`gcloud iam service-accounts add-iam-policy-binding [xxxxxxxx]-compute@developer.gserviceaccount.com --member=[xxxxxxxx]@cloudbuild.gserviceaccount.com --role=roles/iam.serviceAccountUser`

## Cloud Build Custom Variables

The cloud build file requires the build trigger to have a some custom variables set.

_FUNCTION_NAME\_ = The executable function name, should match index.js.

_SERVICE_NAME\_ = Service name for Cloud Run.

_FUNCTION_REGION\_ = The Region to deploy the function to.

_CLUSTER_NAME\_ = The Cloud Run on GKE cluster name.

_CLUSTER_LOCATION\_ = The Cloud Run on GKE cluster location (master zone).

_RUN_REGION\_ = The Cloud Run region to deploy to.

