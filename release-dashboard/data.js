const services = [
  {
    name: "Orders API",
    description: "Handles order lifecycle and fulfillment",
    environments: [
      {
        name: "dev",
        label: "DEV",
        url: "https://github.com/dpdeepankar/AdoToGithubAction/actions/workflows/terraform-deploy.yml"
      },
      {
        name: "dlv",
        label: "DLV",
        url: "https://github.com/dpdeepankar/AdoToGithubAction/actions/workflows/container-deploy.yml"
      },
      {
        name: "acc",
        label: "ACC",
        url: "https://github.com/dpdeepankar/AdoToGithubAction/actions/workflows/terraform-deploy.yml"
      },
      {
        name: "prod",
        label: "PROD",
        url: "https://github.com/dpdeepankar/AdoToGithubAction/actions/workflows/container-deploy.yml"
      }
    ]
  },
  {
    name: "Payments API",
    description: "Processes payments and refunds",
    environments: [
      {
        name: "dev",
        label: "DEV",
        url: "https://github.com/org/payments-api/actions/workflows/service-release.yml"
      },
      {
        name: "prod",
        label: "PROD",
        url: "https://github.com/org/payments-api/actions/workflows/service-release.yml"
      }
    ]
  }
];
