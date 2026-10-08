$env:Path = "C:\Program Files\nodejs;" + $env:Path

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing UNO Platform Dependencies..."
    & "C:\Program Files\nodejs\npm.cmd" install
}

Write-Host "Starting Vite Dev Server on http://127.0.0.1:5173..."
& "C:\Program Files\nodejs\npm.cmd" run dev -- --host 127.0.0.1 --port 5173

