FROM rhel8/nginx-122
USER 0
ADD autobackup /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER 1001
ENV ALLOWED_HOSTS=auto-backup-vuejs-1
ENV ABKP_AXIOS_BASEURL=http://autobackup-express-git:8080/api
ENV TZ=America/Mexico_City
CMD ["/usr/libexec/s2i/run"]