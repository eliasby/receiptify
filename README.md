# Receiptify

Receipt UI and API.

## Getting Started

Start MongoDB using Docker Compose:

```shell
docker compose up -d
```

Change directory to API source:

```shell
cd ./api
```

Run API in development mode:

```shell
./gradlew bootRun
```

Change directory to UI source:

```shell
cd ./ui
```

Install dependencies:

```shell
pnpm install
```

Run UI in development mode:

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

<http://localhost:8080/swagger-ui/index.html>

## Run Tests

To run API tests:

```shell
cd ./api
```

```shell
./gradlew test
```

To run UI tests:

```shell
cd ./ui
```

```shell
pnpm run test
```

## Licensing

Receiptify is released under the [MIT](LICENSE) license.

When contributing to Receiptify, you can find the relevant license in the comments at the top of each file.
