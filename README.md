# phpcon-2024-api-platform-demo

## What's this?

This is a demo project for my talk at [PHP Conference Japan 2024](https://phpcon.php.gr.jp/2024/).

See also:

* https://fortee.jp/phpcon-2024/proposal/8ec3f2ee-7187-4c79-b5a9-c92f032b1455
* https://speakerdeck.com/ttskch/phpcon-2024-intro-to-api-platform

## Installation

```shell
git clone git@github.com:ttskch/phpcon-2024-api-platform-demo.git
```

## Usage

```shell
cd phpcon-2024-api-platform-demo
composer install
php artisan serve --port 8000
```

```shell
cd phpcon-2024-api-platform-demo/frontend
pnpm install
pnpm dev --port 3001
# You can also use npm or yarn
```

And access to:

* http://localhost:8000/api (backend)
* http://localhost:3001 (frontend)
