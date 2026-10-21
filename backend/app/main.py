from fastapi import FastAPI

app = FastAPI(
    title="Enterprise Ticket Intelligence RAG",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "ticket-intelligence-rag"}