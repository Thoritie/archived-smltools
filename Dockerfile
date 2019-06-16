FROM mileschou/phalcon:5.6-apache

COPY apache.conf /etc/apache2/apache2.conf
RUN apt-get update -y
RUN apt-get install libssl-dev -y
RUN pecl install mongo
RUN docker-php-ext-install bcmath
RUN echo "extension=mongo.so" >> /usr/local/etc/php/conf.d/mongo.ini

RUN a2enmod rewrite