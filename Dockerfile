FROM mileschou/phalcon:7.2-apache

COPY apache.conf /etc/apache2/apache2.conf

RUN pecl install mongodb 
RUN echo "extension=mongodb.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`

RUN a2enmod rewrite