# Receiptify

Receipt UI and API.

## Live Deployment

The project is deployed on the cloud, and can be accessed using the following links:

#### Link to a Ready Receipt

<https://receiptify.vercel.app/65402e3925f97a4941f14f02>

_Note: It might take 3-5 minutes during the initial loading, because it's deployed in a free instance on the cloud._

When you open this link, you will be presented with a receipt that I already prepared for demonstration purposes. It shows the list of products with price details, as well as a barcode that can be scanned and will allow to open the same receipt on the mobile.

You can edit and fork this receipt by clicking the bottom right floating button.

#### Link To Create a New Receipt

<https://receiptify.vercel.app>

As the link doesn't contain a receipt ID, it allows the user to create a new receipt, save it, and get the same link as mentioned above.

## Run the Project Locally

Install [Docker](https://docs.docker.com/get-docker) and [Docker Compose](https://docs.docker.com/compose/install).

Start MongoDB using Docker Compose:

```shell
docker compose up -d
```

Change directory to the backend source:

```shell
cd ./backend
```

Run the Spring Boot application using Gradle:

```shell
./gradlew bootRun
```

Change directory to the frontend source:

```shell
cd ./frontend
```

You can use PNPM, Yarn or NPM. In my case I used PNPM, which can be installed (if not already) by following the guide [here](https://pnpm.io/installation), or the with following command:

```shell
corepack enable
```

Install dependencies:

```shell
pnpm install
```

Run the frontend project in development mode:

```shell
pnpm run dev
```

Finally, open <http://localhost:5173> in the browser.

## Create a Receipt Using the REST API

Send a `POST` request to `http://localhost:8080/receipts`, the body can be as follows:

```json
{
  "products": [
    {
      "name": "Lorem ipsum dolor sit amet",
      "price": 27.99,
      "quantity": 1,
      "tags": ["IMPORT"]
    },
    {
      "name": "Ut enim ad minim veniam",
      "price": 18.99,
      "quantity": 1
    },
    {
      "name": "Duis aute irure dolor in reprehenderit",
      "price": 9.75,
      "quantity": 1,
      "tags": ["MEDICAL"]
    },
    {
      "name": "Excepteur sint occaecat cupidatat",
      "price": 11.25,
      "quantity": 1,
      "tags": ["FOOD", "IMPORT"]
    }
  ]
}
```

The response will be the JSON representation of the receipt:

```json
{
  "id": "65426b6bcb741077042d19a3",
  "products": [
    {
      "product": {
        "id": null,
        "name": "Lorem ipsum dolor sit amet",
        "price": 27.99,
        "quantity": 1,
        "tags": ["IMPORT"]
      },
      "finalPrice": 32.19,
      "salesTax": 4.2
    },
    {
      "product": {
        "id": null,
        "name": "Ut enim ad minim veniam",
        "price": 18.99,
        "quantity": 1,
        "tags": []
      },
      "finalPrice": 20.89,
      "salesTax": 1.9
    },
    {
      "product": {
        "id": null,
        "name": "Duis aute irure dolor in reprehenderit",
        "price": 9.75,
        "quantity": 1,
        "tags": ["MEDICAL"]
      },
      "finalPrice": 9.75,
      "salesTax": 0
    },
    {
      "product": {
        "id": null,
        "name": "Excepteur sint occaecat cupidatat",
        "price": 11.25,
        "quantity": 1,
        "tags": ["FOOD", "IMPORT"]
      },
      "finalPrice": 11.85,
      "salesTax": 0.6
    }
  ],
  "salesTaxes": 6.7,
  "total": 74.68,
  "request": {
    "products": [
      {
        "id": null,
        "name": "Lorem ipsum dolor sit amet",
        "price": 27.99,
        "quantity": 1,
        "tags": ["IMPORT"]
      },
      {
        "id": null,
        "name": "Ut enim ad minim veniam",
        "price": 18.99,
        "quantity": 1,
        "tags": []
      },
      {
        "id": null,
        "name": "Duis aute irure dolor in reprehenderit",
        "price": 9.75,
        "quantity": 1,
        "tags": ["MEDICAL"]
      },
      {
        "id": null,
        "name": "Excepteur sint occaecat cupidatat",
        "price": 11.25,
        "quantity": 1,
        "tags": ["FOOD", "IMPORT"]
      }
    ]
  }
}
```

## REST API Documentation

| Environment | URL                                                     |
| ----------- | ------------------------------------------------------- |
| Live        | <https://receiptify.onrender.com/swagger-ui/index.html> |
| Local       | <http://localhost:8080/swagger-ui/index.html>           |

## Run Tests

To run the backend tests:

```shell
cd ./backend
```

```shell
./gradlew test
```

To run the frontend tests:

```shell
cd ./frontend
```

```shell
pnpm run test
```

## Licensing

Receiptify is released under the [MIT](LICENSE) license.

When contributing to Math Stylus, you can find the relevant license in the comments at the top of each file.
