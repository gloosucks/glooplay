@echo off
cls
echo.
echo ========================================
echo           GlooPlay Launcher
echo ========================================
echo.
echo Starting GlooPlay streaming server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://python.org
    echo.
    pause
    exit /b 1
)

REM Start the server
python server.py

echo.
echo Server has stopped.
pause