from fastapi import FastAPI
# API에 대한 모든 기능을 제공하는 파이썬 클래스
# FastAPI는 Starlette을 직접 상속하기 때문에 Stralette의 모든 기능을 사용할 수 있다.
# https://www.starlette.io/


app = FastAPI()
# app 변수는 FastAPI 클래스의 인스턴스가 된다.
# 모든 API를 생성하기 위한 상호작용의 주요 지점이 된다.

@app.get("/")
async def root():
return {"message": "Hello World"}