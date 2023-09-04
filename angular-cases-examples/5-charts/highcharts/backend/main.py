from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()

# uvicorn main:app --reload
# http://127.0.0.1:8000/docs
@app.get("/api-endpoint")
async def first_api():
    return {"message":"Hello Nithin"}

# origins paths
origins=[
    "http://localhost:4200",
    "http://localhost:4300"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
