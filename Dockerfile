FROM rhel9/nginx-122
RUN mkdir /app
COPY autobackup /app
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["/usr/libexec/s2i/run"]