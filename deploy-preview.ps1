# Publish the GitHub Pages preview of the website.
# Builds web/ for the sub-path and force-pushes the result to the gh-pages branch.
# Preview: https://thechmanic-sketch.github.io/thinkaudiovisual-website/
# Usage (from this folder):  .\deploy-preview.ps1

$ErrorActionPreference = 'Continue'   # git/npm write normal progress to stderr; we check exit codes instead
$root = $PSScriptRoot
$repo = git -C $root remote get-url origin

Push-Location "$root\web"
try {
  $env:SITE_URL = 'https://thechmanic-sketch.github.io'
  $env:BASE_PATH = '/thinkaudiovisual-website'
  npm run build
  if ($LASTEXITCODE -ne 0) { throw 'Build failed' }
} finally {
  Remove-Item Env:SITE_URL, Env:BASE_PATH -ErrorAction SilentlyContinue
  Pop-Location
}

# Fresh one-commit repo inside a temp copy of dist (keeps project history clean)
$tmp = Join-Path $env:TEMP "tav-gh-pages"
if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
Copy-Item -Recurse "$root\web\dist" $tmp
New-Item -ItemType File "$tmp\.nojekyll" -Force | Out-Null   # serve the _astro folder as-is
Push-Location $tmp
try {
  git init -q -b gh-pages
  git config core.autocrlf false
  git add -A 2>$null
  git -c user.name="$(git -C $root config user.name)" -c user.email="$(git -C $root config user.email)" commit -q -m "Deploy preview $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
  git push -q -f $repo gh-pages 2>&1 | Out-Null
  if ($LASTEXITCODE -ne 0) { throw 'Push to gh-pages failed' }
} finally { Pop-Location }

# Rebuild for the real domain so local dist/ matches production again
Push-Location "$root\web"; npm run build | Out-Null; Pop-Location
Write-Host "Preview published: https://thechmanic-sketch.github.io/thinkaudiovisual-website/ (live in ~1 minute)"
