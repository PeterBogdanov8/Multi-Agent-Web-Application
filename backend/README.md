# Backend
This is the backend of the project.

## Tech Stack
- **Framework:** FastAPI
- **Language:** Python 3.14.6
- **Database:** JSON
- **Validation:** Pydantic

## Getting Started

### Prerequisites
- Python 3.14.6 or higher installed.
- Visual Studio Code installed.

### Installation
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```
3. In VS Code, open the Command Palette (`Ctrl+Shift+P`), type Python: Select Interpreter, and choose the `.venv` path.
4. Install FastAPI 
    ```bash
    pip install "fastapi[standard]"
    ```

### How to run the backend
In the backend directory run the following command:
```bash
fastapi dev main.py
```