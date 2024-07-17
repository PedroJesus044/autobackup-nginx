FROM rhel9/nginx-122
ADD autobackup .
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["/usr/libexec/s2i/run"]