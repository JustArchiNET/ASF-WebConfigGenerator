$target = 'docs' # Relative to script directory

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

Push-Location "$PSScriptRoot"

try {
	git pull

	npm ci --no-progress
	npm run-script build --no-progress

	git reset
	git add -A -f "$target"
	git commit -m "ASF-WebConfigGenerator build"
	git push
} finally {
	Pop-Location
}
