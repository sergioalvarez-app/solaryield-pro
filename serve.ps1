# SolarYield Pro - Servidor local de pruebas (PowerShell puro, sin instalar nada)
# Uso:  powershell -ExecutionPolicy Bypass -File .\serve.ps1
# Parar: Ctrl+C

param([int]$Port = 5500)

$root = $PSScriptRoot
$prefix = "http://localhost:$Port/"
$mime = @{
  '.html' = 'text/html; charset=utf-8'; '.js' = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.css' = 'text/css; charset=utf-8'
  '.svg' = 'image/svg+xml'; '.png' = 'image/png'; '.ico' = 'image/x-icon'; '.md' = 'text/plain; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try { $listener.Start() } catch { Write-Host "No se pudo abrir el puerto $Port. Prueba: .\serve.ps1 -Port 5501" -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "  SolarYield Pro sirviendo en $prefix" -ForegroundColor Cyan
Write-Host "  Pulsa Ctrl+C para parar." -ForegroundColor DarkGray
Write-Host ""
Start-Process $prefix

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrEmpty($path)) { $path = 'index.html' }
    $file = [IO.Path]::GetFullPath((Join-Path $root $path))
    $res = $ctx.Response
    if ($file.StartsWith($root) -and (Test-Path $file -PathType Leaf)) {
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $res.Headers.Add('Cache-Control', 'no-cache')
      $bytes = [IO.File]::ReadAllBytes($file)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host ("  200  /" + $path)
    } else {
      $res.StatusCode = 404
      Write-Host ("  404  /" + $path) -ForegroundColor Yellow
    }
    $res.OutputStream.Close()
  }
} finally { $listener.Stop() }
