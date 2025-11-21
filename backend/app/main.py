from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/test-celery")
def test_celery():
    from app.celery_app import test_task
    result = test_task.delay()
    return {"task_id": result.id}