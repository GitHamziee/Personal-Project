@echo off
echo ============================================
echo   NexaFlow - Project Setup
echo ============================================
echo.

:: Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js found:
node -v

echo.
echo Installing dependencies...
echo.

npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Dependencies installed successfully!
echo ============================================
echo.
echo Available commands:
echo   npm run dev    - Start development server
echo   npm run build  - Build for production
echo   npm run start  - Start production server
echo.
pause
