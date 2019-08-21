FROM php:7.3.2-fpm-alpine

RUN apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    curl-dev \
    libtool \
    libxml2-dev \
    libzip-dev

RUN apk add --no-cache \
    composer \
    curl \
    bash \
    git \
    nodejs \
    npm \
    mysql-client \
    unzip \
    zip \
    --repository http://dl-cdn.alpinelinux.org/alpine/edge/community \
    --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
    --update

# RUN docker-php-ext-install curl
# RUN docker-php-ext-install iconv
# RUN docker-php-ext-install mbstring
# RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql
# RUN docker-php-ext-install pcntl
# RUN docker-php-ext-install tokenizer
# RUN docker-php-ext-install xml
# RUN docker-php-ext-install zip

RUN apk del -f .build-deps

WORKDIR /var/www
