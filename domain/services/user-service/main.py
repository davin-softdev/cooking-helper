import json
import os
from fastapi import FastAPI, HTTPException

app = FastAPI()

DATABASE_FILE = "db.json"

# Create the database file if it doesn't exist
if not os.path.exists(DATABASE_FILE):
    with open(DATABASE_FILE, "w") as f:
        json.dump([], f)

# Load the data from the JSON file
def load_data():
    with open(DATABASE_FILE, "r") as f:
        return json.load(f)

# Save the data to the JSON file
def save_data(data):
    with open(DATABASE_FILE, "w") as f:
        json.dump(data, f, indent=4)  # Indent for readability

# Define a helper function to ensure data consistency
def get_item_by_id(item_id):
    items = load_data()
    for item in items:
        if item["id"] == item_id:
            return item
    return None

# Example endpoints for CRUD operations
@app.get("/items")
async def read_items():
    return load_data()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    item = get_item_by_id(item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@app.post("/items")
async def create_item(item: dict):
    items = load_data()
    item_id = len(items) + 1  # Generate a unique ID
    item["id"] = item_id
    items.append(item)
    save_data(items)
    return item

@app.put("/items/{item_id}")
async def update_item(item_id: int, item: dict):
    items = load_data()
    existing_item = get_item_by_id(item_id)
    if not existing_item:
        raise HTTPException(status_code=404, detail="Item not found")
    index = items.index(existing_item)
    items[index] = item
    save_data(items)
    return item

@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    items = load_data()
    existing_item = get_item_by_id(item_id)
    if not existing_item:
        raise HTTPException(status_code=404, detail="Item not found")
    items.remove(existing_item)
    save_data(items)
    return {"message": "Item deleted"}
