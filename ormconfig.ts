{
    "type": "oracle", // 사용하는 데이터베이스 유형
    "host": ,
    "port": 1521,
    "username": "your_username",
    "password": "your_password",
    "sid": "your_sid",
    "synchronize": true, // 개발 중에만 사용
    "logging": false,
    "entities": [
      "src/entity/**/*.ts"
    ],
}