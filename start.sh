# 이미지 빌드
docker build -t realworld-next-ts-app .
# ex) docker build -t myapp .

# 컨테이너 배포
docker run -d -p 3000:3000 realworld-app