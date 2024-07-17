FROM rhel9/nginx-122
USER 0
ADD autobackup /app
COPY nginx.conf /etc/nginx/nginx.conf
USER 1001
CMD ["/usr/libexec/s2i/run"]