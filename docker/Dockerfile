# Use official PHP image with Apache
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    && docker-php-ext-install intl mbstring pdo pdo_mysql zip \
    && a2enmod rewrite

# Enable Apache mod_rewrite
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN composer --version

COPY . /var/www/html

RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/webroot|' /etc/apache2/sites-available/000-default.conf

# Set permissions
RUN mkdir -p /var/www/html/tmp /var/www/html/logs \
    && chown -R www-data:www-data /var/www/html/tmp /var/www/html/logs

# Expose port
EXPOSE 80